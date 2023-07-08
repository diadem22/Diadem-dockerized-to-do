const express = require('express');
const app = express();
const {
  createActivity,
  updateActivity,
  fetchByDateAndAuthor,
} = require('./models/index');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

  app.get('/', (req, res) => {
    res.send('to-do-app.com');
  });

  app.post('/to-do/create', async (req, res, next) => {
    const { name, category, author, date, isPublished, priority } = req.body;

    try {
      const activity = await createActivity(
        name,
        category,
        author,
        date,
        isPublished,
        priority
      );
      return res
        .status(200)
        .json({ data: activity, success: true, message: 'Activity created' });
    } catch (error) {
      return next(error);
    }
  });

  
    app.put('/to-do/update', async (req, res, next) => {
    const { id, name, priority, category } = req.body;

    try {
      const activity = await updateActivity(id, name, category, priority);
      return res
        .status(200)
        .json({ data: activity, success: true, message: 'Activity updated' });
    } catch (error) {
      return next(error);
    }
  }); 

  app.get('/to-do/fetch', async (req, res, next) => {
    const { author } = req.body;

    try {
      const activity = await fetchByDateAndAuthor(author);
      return res.status(200).json({
        data: activity,
        success: true,
        message: 'Activity retrieved',
      });
    } catch (error) {
      return next(error);
    }
  });


app.listen(process.env.PORT || 6000, () => {
  console.log('Server is listening on port 6000....');
});




