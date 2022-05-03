# README


## Project Pitch

A platform to bring the classroom online. Teachers will be able to interact and assess their students’ performances as well as communicate with them. Students will be able to submit assignments as well as communicate with the class.

## User Story


- As a teacher, I want to be able to create an account so I can log in and use the app.
- As a teacher, I want to be able to see my students and their grades
- As a teacher, I want to be able to create assignments for my students
- As a teacher, I want to be able to link assignments to GitHub or google docs
- As a teacher, I want to be able to search for students by name


- As a student, I want to be able to create an account so I can log in and use the app.
- As a student, I want to be able to submit assignments 


## Strech goals

- As a teacher, I want to be able to create discussion posts
- As a teacher, I want to be able to organize a gradebook based on weighted categories
- As a teacher, I want to be able to message my class or my students individually

- As a student I want to be able to contribute to discussion posts
- As a student I want to be able to message the teacher

## Models and Relationships

![image](https://user-images.githubusercontent.com/85294886/137193180-0848b0f9-0410-4845-a827-ee68d3e396db.png)


### Teacher

A `Teacher` has many `Students` and `Assignments`

- id 
- full_name
- username
- password
- image_link
- grade_level


### Student 

A `Student` belongs to a `Teacher` and a `Student` has many `Assignments`

- full_name
- username
- password
- image_link
- grade_level
- grade
- teacher_id

### Assignment

An `Assignment` belongs to a `Teacher` and `Student`

- assignment_link
- grade
- teacher_id
- student_id


## API Documentation

GET/api/teachers/:id

`{
	id: 1
	full_name: “Sam Shearer”
	username: “Mr. Shearer”
	password: “flatiron”
	image_link: “”
	grade_level: “10th grade”
}`


Get/api/students

`{
	id: 1
	full_name: "John Devins"
	username: "jdevins"
	password: "123"
	image_link: ""
	grade_level: "10th Grade"
	grade: "77%"
	teacher_id: 1
}`

Get/api/assignments/:id

`{
	id: 1
	name: "States Map Quiz"
	assignment_link: ""
	grade: ""
	student_id: ""
	teacher_id: ""
}`



## Wireframes

![image](https://user-images.githubusercontent.com/85294886/137209288-7b9e4516-5c35-4ee6-844b-154141e653e7.png)

![image](https://user-images.githubusercontent.com/85294886/137209340-f05f88be-cbbf-42a8-9324-5f0e9e06150e.png)

![image](https://user-images.githubusercontent.com/85294886/137209370-6ede4649-5023-44a7-911a-d4695c251322.png)

![image](https://user-images.githubusercontent.com/85294886/137209388-3bae1fcf-28f9-4d99-b25c-8681e27bcc30.png)

![image](https://user-images.githubusercontent.com/85294886/137209422-4f3d331f-f641-49c6-acec-bf1a50ab05fa.png)

![image](https://user-images.githubusercontent.com/85294886/137209451-2b2df1e3-7de9-4b13-ae92-ff70adb90445.png)


