<?php

if ($_SERVER["REQUEST_METHOD"] === "GET") {
  $data = file_get_contents('https://jetlend.ru/invest/api/exchange/loans');
  // $data_raw = json_decode($data, TRUE);
  // echo "ECHO";
  print_r(json_encode($data));
}
?>
