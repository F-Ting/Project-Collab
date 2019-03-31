INSERT INTO users (username, name, bio, password, type) VALUES ('Docker','Docker','Docker is the leader in the containerization market, combining an enterprise-grade container platform with world-class services.','password', 'company');
INSERT INTO users (username, name, bio, password, type) VALUES ('matthew-jay-wong','Matthew Wong','3rd Year CS Specialist.','password', 'student');
INSERT INTO users (username, name, bio, password, type) VALUES ('3370sohail','Sohail Hameed','3rd Year CS Specialist.','password', 'student');
INSERT INTO users (username, name, bio, password, type) VALUES ('Clarifai','Clarifai','Image processing library.','password', 'company');
INSERT INTO users (username, name, bio, password, type) VALUES ('TensorFlow','TensorFlow','Open source software library.','password', 'company');
INSERT INTO users (username, name, bio, password, type) VALUES ('Maven','Maven','Apache Maven is a software project management and comprehension tool.','password', 'company');
INSERT INTO users (username, name, bio, password, type) VALUES ('Firebase','Firebase','Google''s mobile platform that helps you quickly develop high-quality apps and grow your business.','password', 'company');
INSERT INTO users (username, name, bio, password, type) VALUES ('Flutter','Flutter','Flutter is Google’s mobile app SDK for crafting high-quality native interfaces on iOS and Android in record time.','password', 'company');


INSERT INTO projects (name, description, github, url, project_start_date, image, status) VALUES ('Moby', 'Moby Project - a collaborative project for the container ecosystem to assemble container-based systems  Please contact moby at docker.moby@gmail.ca to get involved!', 'https://github.com/moby/moby', 'https://www.docker.com/', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/IE2JvMn.png', 'approved');
INSERT INTO projects (name, description, github, url, project_start_date, image, status) VALUES ('Rate My Courses', 'Finding the right class for YOU.  Please contact Matthew Wong at MatthewWong@gmail.com to get involved!', 'https://github.com/matthew-jay-wong/rate-my-courses', 'https://matthew-jay-wong.github.io', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/Hw4VJcB.png', 'approved');
INSERT INTO projects (name, description, github, url, project_start_date, image, status) VALUES ('ShowTime', 'Community Driven TV Guide.  Please contact Sohail Hameed at SohailHameed@gmail.com to get involved!', 'https://github.com/george-ma/ShowTime', 'https://3370sohail.github.io', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/F2neU7C.png', 'approved');
INSERT INTO projects (name, description, github, url, project_start_date, image, status) VALUES ('Clarifai API', 'The Clarifai API offers image and video recognition as a service. Whether you have one image or billions, you are only steps away from using artificial intelligence to recognize your visual content.  Please contact Clarifai at Clarifai@gmail.com to get involved!', 'https://github.com/Clarifai', 'https://clarifai.com/', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/torxQvw.png', 'approved');
INSERT INTO projects (name, description, github, url, project_start_date, image, status) VALUES ('TensorFlow', 'TensorFlow is an open source software library for numerical computation using data flow graphs. The graph nodes represent mathematical operations, while the graph edges represent the multidimensional data arrays (tensors) that flow between them. This flexible architecture enables you to deploy computation to one or more CPUs or GPUs in a desktop, server, or mobile device without rewriting code. TensorFlow also includes TensorBoard, a data visualization toolkit.  Please contact TensorFlow at TensorFlow@gmail.com to get involved!', 'https://github.com/tensorflow/tensorflow', 'https://www.tensorflow.org/', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/Jsd4Ukc.jpg', 'approved');
INSERT INTO projects (name, description, github, url, project_start_date, image, status) VALUES ('Maven', 'Based on the concept of a project object model (POM), Maven can manage a project''s build, reporting and documentation from a central piece of information.  Please contact Maven at maven@gmail.com to get involved!', 'https://github.com/apache/maven', 'https://maven.apache.org/', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/7sgxzj4.png', 'approved');
INSERT INTO projects (name, description, github, url, project_start_date, image, status) VALUES ('Firebase', 'Firebase is a mobile app development platform that provides data analysis and database web services for developers. Firebase provides developers with an API that enables the integration of online statistical analysis and database communication into their applications.  Please contact Firebase at firebase@gmail.ca to get involved!', 'https://github.com/firebase', 'https://firebase.google.com/', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/yBLUbv2.png', 'approved');
INSERT INTO projects (name, description, github, url, project_start_date, image, status) VALUES ('Flutter', 'Flutter makes it easy and fast to build beautiful mobile apps.  Please contact Flutter at flutter@gmail.ca to get involved!', 'https://github.com/flutter/flutter', 'https://flutter.dev/', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/bogoU6u.png', 'approved');


INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (1,1,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (2,2,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (3,3,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (4,4,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (5,5,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (6,6,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (7,7,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (8,8,True,'approved');

INSERT INTO tags (tag) VALUES ('Javascript'); 
INSERT INTO tags (tag) VALUES ('Java'); 
INSERT INTO tags (tag) VALUES ('Python');
INSERT INTO tags (tag) VALUES ('Artificial Intellgence');
INSERT INTO tags (tag) VALUES ('Machine Learning');
INSERT INTO tags (tag) VALUES ('Node.js');
INSERT INTO tags (tag) VALUES ('Angular 7');
INSERT INTO tags (tag) VALUES ('React.js');
INSERT INTO tags (tag) VALUES ('C');
INSERT INTO tags (tag) VALUES ('C++');
INSERT INTO tags (tag) VALUES ('C#');
INSERT INTO tags (tag) VALUES ('JQuery');
INSERT INTO tags (tag) VALUES ('Popular');
INSERT INTO tags (tag) VALUES ('New');

INSERT INTO tag_to_projects (tag_id,project_id) VALUES (1,3);
INSERT INTO tag_to_projects (tag_id,project_id) VALUES (6,3);
INSERT INTO tag_to_projects (tag_id,project_id) VALUES (7,3);
INSERT INTO tag_to_projects (tag_id,project_id) VALUES (1,1);
INSERT INTO tag_to_projects (tag_id,project_id) VALUES (2,1);
INSERT INTO tag_to_projects (tag_id,project_id) VALUES (3,1);
INSERT INTO tag_to_projects (tag_id,project_id) VALUES (4,1);
INSERT INTO tag_to_projects (tag_id,project_id) VALUES (5,1);

INSERT INTO tag_to_users (tag_id,user_id) VALUES (1,1);
INSERT INTO tag_to_users (tag_id,user_id) VALUES (2,2);
INSERT INTO tag_to_users (tag_id,user_id) VALUES (3,3);
INSERT INTO tag_to_users (tag_id,user_id) VALUES (4,4);
INSERT INTO tag_to_users (tag_id,user_id) VALUES (5,5);

INSERT INTO tag_to_users (tag_id,user_id) VALUES (6,1);
INSERT INTO tag_to_users (tag_id,user_id) VALUES (7,2);
INSERT INTO tag_to_users (tag_id,user_id) VALUES (8,3);
INSERT INTO tag_to_users (tag_id,user_id) VALUES (9,4);
INSERT INTO tag_to_users (tag_id,user_id) VALUES (10,5);
