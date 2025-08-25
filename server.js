const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const { email, password } = req.body;
  const userData = { email, password };

  const dbPath = path.join(__dirname, 'database', 'user.json');

  fs.writeFile(dbPath, JSON.stringify(userData, null, 2), (err) => {
    if (err) {
      console.error('保存エラー:', err);
      return res.status(500).send('保存に失敗しました');
    }
    res.send('ユーザー情報を保存しました！');
  });
});

app.listen(PORT, () => {
  console.log(`サーバー起動中：http://localhost:${PORT}`);
});