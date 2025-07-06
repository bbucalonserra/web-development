curl -X POST http://localhost:3000/books \
-H "Content-Type: application/json" \
-d '{
  "title": "Do Androids Dream of Electric Sheep",
  "author": "Philip K. Dick",
  "author_id": 3,
  "price": 15.99,
  "genre": "Science Fiction",
  "genre_id": 2,
  "publication_date": "1974"
}'
