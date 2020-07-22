# About

This is example code for integrating Stack overFlow api with Django and Django rest framework using cache and throtling.

Read more about Stack overflow APi here: <a href='https://stackapi.readthedocs.io/en/latest/'  target="_blank"> Stack APi offical docs </a> <br>
Read more about Django rest framework: <a href='https://www.django-rest-framework.org/#quickstart'  target="_blank"> DRF offical docs </a> <br>
Read more about Angular js : <a href='https://www.w3schools.com/'  target="_blank"> Learn Angularjs from w3school </a> 

<br>
<h3> What you will learn from this repository </h3>
<ul>
    <li> Stack Api integration </li>
    <li> Cache managemnt using Redis </li>
    <li> Custom Throtling like 5 hits per minuter or 100 hits per day </li>
    <li> Integrate Angulrjs as frontend with Django template. </li>
    <li> Angular 6 integration with CORS </li>
</ul>

<br>
<h3> Special Guide for angular 6 setup </h3>
<p>I have just upploaded angular 6 src not all app. So you have to setup angular 2+ </p>
<ul>
	<li>Install angular using cli </li>
	<pre>npm install -g @angular/cli</pre>
	<li>Create angular app by the following cli cmd </li>
	<pre>ng new my-app</pre>
	<li>Now copy src folder from this dir 'Stackoverflow-API-with-angularjs/angular_6_src/' replace it with src present in my-app dir</li>
	<li>Now run the angular server</li>
	<pre>ng serve --open</pre>
</ul>
<br>
<h3>How to run this app:</h3>
<ul>
	<li>clone this repository</li>
	<li>Install requirement file</li>
	<li>open directory where manage.py file is present</li>
	<li>open terminal  type the following command
<pre>pip3 install -r requirement.txt
python3 manage.py runserver</pre>
</li>
</ul>

