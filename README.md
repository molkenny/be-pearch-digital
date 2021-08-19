<h1><b>Test Pearch Digital</b></h1>

<h2 style="margin-top: 15px;">Back-End (Node Js)</h2>
<h2>Host: Heroku</h2>
<h2>BD: PGSQL</h2>


<h3>Rutas Apis</h3>

<hr>
<h4>Log In</h4>
<span>EndPoint: /api/v1/login</span>
<span>Type: POST</span>
<p>Body (Json): mail : [String] , password : [String] </p>
<p>Success: {success: [Boolean], data: {user : [Object] , token: [JWT String]}}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>

<hr>
<h4>List Users</h4>
<span>EndPoint: /api/v1/user</span>
<span>Type: GET</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>
<p>Note: Only Admins</p>

<hr>
<h4>Reset Password User</h4>
<span>EndPoint: /api/v1/user/password"</span>
<span>Type: PUT</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Body (Json): password : [String] , password_anterior : [String] </p>
<p>Success: {success: [Boolean], data: [Boolean]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>

<hr>
<h4>Add User</h4>
<span>EndPoint: /api/v1/user</span>
<span>Type: POST</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Body (Json): name : [String] , mail : [String] , password : [String] , id_group : [Integer (1: ADMIN, 0:BASIC)]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>
<p>Note: Only Admins</p>

<hr>
<h4>Edit User</h4>
<span>EndPoint: /api/v1/user/:id_user</span>
<span>Type: PUT</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Body (Json): name : [String] , mail : [String] , password : [String] , id_group : [Integer (1: ADMIN, 0:BASIC)] , status: [Boolean]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>
<p>Note: Only Admins</p>

<hr>
<h4>Delet User</h4>
<span>EndPoint: /api/v1/user/:id_user</span>
<span>Type: DELETE</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>
<p>Note: Only Admins</p>


<hr>
<h4>List SpreadSheet</h4>
<span>EndPoint: /api/v1/spreadsheet</span>
<span>Type: GET</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>

<hr>
<h4>Get data SpreadSheet</h4>
<span>EndPoint: /api/v1/spreadsheet/:id_spreadsheet</span>
<span>Type: GET</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>

<hr>
<h4>Add SpreadSheet</h4>
<span>EndPoint: /api/v1/spreadsheet</span>
<span>Type: POST</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Body (Json): name : [String]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>

<hr>
<h4>Edit SpreadSheet</h4>
<span>EndPoint: /api/v1/spreadsheet/:id_spreadsheet</span>
<span>Type: PUT</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Body (Json): name : [String] data: [JSON]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>
<p>Note: You can send only the name, only the data or both</p>

<hr>
<h4>Delete SpreadSheet</h4>
<span>EndPoint: /api/v1/spreadsheet/:id_spreadsheet</span>
<span>Type: DELETE</span>
<p>Header (Bearer Authentication): [JWT String]</p>
<p>Success: {success: [Boolean], data: [Object]}</p>
<p>Error: {success: [Boolean], err: {message : [String]}}</p>