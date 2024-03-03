**Blog Directory for Routing and Nested Routing**
**Products Directory for Dynamic Routing and Nested Dynamic Routing**
**Docs Directory for Catch All Segements and Optional Catch All Segments**

1. **GET:**
   - **Description:** The GET method is used to request data from a specified resource.
   - **Example:** When you enter a URL in your browser and press Enter, you're sending a GET request to the server to retrieve the web page.

2. **POST:**
   - **Description:** The POST method is used to submit data to be processed to a specified resource.
   - **Example:** When you submit a form on a website, the data you entered (like username and password) is sent to the server using a POST request for authentication or storing in a database.

3. **PUT:**
   - **Description:** The PUT method is used to update a resource or create a new resource if it does not exist.
   - **Example:** Updating a user's profile information. If the resource doesn't exist, PUT can create it with the specified data.

4. **PATCH:**
   - **Description:** The PATCH method is used to apply partial modifications to a resource.
   - **Example:** Modifying only the email address or password of a user profile without altering other details.

5. **DELETE:**
   - **Description:** The DELETE method is used to request the removal of a resource.
   - **Example:** When you delete a file in a cloud storage service or remove a post from a social media platform, you are sending a DELETE request to the server.

6. **HEAD:**
   - **Description:** The HEAD method is similar to GET, but it asks for the response headers only, not the actual data.
   - **Example:** Used when you want to check if a resource has been modified without downloading the entire resource. It can be useful for checking if a file has been updated on the server.

7. **OPTIONS:**
   - **Description:** The OPTIONS method is used to describe the communication options for the target resource.
   - **Example:** Before making a request to a server, a client can send an OPTIONS request to understand which HTTP methods and other communication options are supported by the server for a particular resource.

For example, let's consider a scenario where you have a REST API for managing users:

- **GET:** Retrieve user information - `GET /users`
- **POST:** Create a new user - `POST /users`
- **PUT:** Update user information - `PUT /users/{id}`
- **PATCH:** Update user's specific details - `PATCH /users/{id}`
- **DELETE:** Delete a user - `DELETE /users/{id}`
- **HEAD:** Check if a user exists - `HEAD /users/{id}`
- **OPTIONS:** Get communication options - `OPTIONS /users`
