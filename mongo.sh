# Shell script to run mongo

echo "Starting MongoDB database (required folder called database)"
mongod --dbpath ./database > database/log.txt &
echo "MongoDB running in the background see database/log.txt for logs"