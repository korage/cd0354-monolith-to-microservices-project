export const config = {
  'username': "khorage_dev",
  'password': "khorage_dev",
  'database': "postgres",
  'host': "cdr-udagram.czqajqk7kyhl.us-east-1.rds.amazonaws.com",
  'dialect': 'postgres',
  'aws_region': "us-east-1",
  'aws_profile': "default",
  'aws_media_bucket': "test-576115038802-dev",
   'url': "http://localhost:8100",
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
