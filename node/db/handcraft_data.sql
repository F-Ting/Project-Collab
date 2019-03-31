INSERT INTO users (username, name, bio, password, email, type) VALUES ('SergeyBrin','Sergey Brin','CEO at Google.','password', 'SergeyBrin@example.com', 'admin');
INSERT INTO users (username, name, bio, password,
email, type) VALUES ('matthew-jay-wong','Matthew Wong','3rd Year CS Specialist.','password', 'matthew
_jay_wong@example.com', 'student');
INSERT INTO users (username, name, bio, password,
email, type) VALUES ('3370sohail','Sohail Hameed','3rd Year CS Specialist.','password',
'3370sohail@example.com', 'student');
INSERT INTO users (username, name, bio, password,
email, type) VALUES ('TensorFlow','TensorFlow','Open source software library.','password',
'TensorFlow@example.com', 'company');
INSERT INTO users (username, name, bio, password,
email, type) VALUES ('Clarifai','Clarifai','Image processing library.','password',
'Clarifai@example.com', 'company');


INSERT INTO projects (name, description, tasks_required, github, url, project_start_date, image, status) VALUES ('Google', 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.  Please contact Sergey Brin at SergeyBrin@google.ca to get involved!', 'Angular Frontend Developers', 'https://github.com/google', 'https://google.com', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/Hjpgzeq.jpg', 'approved');
INSERT INTO projects (name, description, tasks_required, github, url, project_start_date, image, status) VALUES ('Rate My Courses', 'Finding the right class for YOU.', 'NodeJS Backend developers, Mongoose Experts', 'https://github.com/matthew-jay-wong/rate-my-courses', 'https://matthew-jay-wong.github.io', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/Hw4VJcB.png', 'approved');
INSERT INTO projects (name, description, tasks_required, github, url, project_start_date, image, status) VALUES ('ShowTime', 'Community Driven TV Guide.', 'React Developers', 'https://github.com/george-ma/ShowTime', 'https://3370sohail.github.io', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/F2neU7C.png', 'approved');
INSERT INTO projects (name, description, tasks_required, github, url, project_start_date, image, status) VALUES ('TensorFlow', 'TensorFlow is an open source software library for numerical computation using data flow graphs. The graph nodes represent mathematical operations, while the graph edges represent the multidimensional data arrays (tensors) that flow between them. This flexible architecture enables you to deploy computation to one or more CPUs or GPUs in a desktop, server, or mobile device without rewriting code. TensorFlow also includes TensorBoard, a data visualization toolkit.', 'Developers interested in machine learning, Python developers, C++ Developers',  'https://github.com/tensorflow/tensorflow', 'https://www.tensorflow.org/', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/Jsd4Ukc.jpg', 'approved');
INSERT INTO projects (name, description, tasks_required, github, url, project_start_date, image, status) VALUES ('Clarifai API', 'The Clarifai API offers image and video recognition as a service. Whether you have one image or billions, you are only steps away from using artificial intelligence to recognize your visual content.', 'Python developers, Javascript Developers', 'https://github.com/Clarifai', 'https://clarifai.com/', '1998-11-25T05:00:00.000Z', 'https://i.imgur.com/torxQvw.png', 'approved');


INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (1,1,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (2,2,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (3,3,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (4,4,True,'approved');
INSERT INTO user_associations (user_id, project_id, is_admin, status) VALUES (5,5,True,'approved');

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
