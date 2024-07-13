<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    @vite(['resources/css/app.css'])
    <title>Laravel CRUD App</title>
    {{-- <link rel="shortcut icon" href='{{ url("") }}/yasir.png' type="image/x-icon"> --}}
</head>

<body>
    <div id="app">
    </div>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

</html>
