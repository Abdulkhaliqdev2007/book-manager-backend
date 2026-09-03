const Book = require('../models/Book');

// @desc    Get dashboard statistics for logged-in user
// @route   GET /api/dashboard/stats
// @access  Private
const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log('DASHBOARD USER ID:', userId);

    const [
      totalBooks,
      totalValueResult,
      booksByCategory,
      booksOverTime,
      averagePriceByCategory
    ] = await Promise.all([
      // 1. Total books
      Book.countDocuments({
        user: userId
      }),

      // 2. Total value
      Book.aggregate([
        {
          $match: {
            user: userId
          }
        },
        {
          $group: {
            _id: null,
            totalValue: {
              $sum: '$price'
            }
          }
        }
      ]),

      // 3. Books by category
      Book.aggregate([
        {
          $match: {
            user: userId
          }
        },
        {
          $group: {
            _id: '$category',
            count: {
              $sum: 1
            }
          }
        },
        {
          $sort: {
            count: -1
          }
        }
      ]),

      // 4. Books added over time
      Book.aggregate([
        {
          $match: {
            user: userId
          }
        },
        {
          $group: {
            _id: {
              year: {
                $year: '$createdAt'
              },
              month: {
                $month: '$createdAt'
              }
            },
            count: {
              $sum: 1
            }
          }
        },
        {
          $sort: {
            '_id.year': 1,
            '_id.month': 1
          }
        }
      ]),

      // 5. Average price by category
      Book.aggregate([
        {
          $match: {
            user: userId
          }
        },
        {
          $group: {
            _id: '$category',
            averagePrice: {
              $avg: '$price'
            }
          }
        },
        {
          $sort: {
            averagePrice: -1
          }
        }
      ])
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalBooks,
        totalValue: totalValueResult[0]?.totalValue || 0,
        booksByCategory,
        booksOverTime,
        averagePriceByCategory
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getDashboardStats
};