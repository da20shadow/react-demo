<?php
$data = [
    0 => array(
        "id" => "1",
        "type" => "Dog",
        "name" => "Sharo",
        "age" => "3"
    ),
    1 => array(
        "id" => "2",
        "type" => "Cat",
        "name" => "Jack",
        "age" => "1"
    )
];
$data = json_encode($data);
echo $data;