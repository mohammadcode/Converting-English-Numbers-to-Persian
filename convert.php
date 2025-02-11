<?php
header('Content-Type: application/json');
function convertToPersian($number) {
    $englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    $persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str_replace($englishNumbers, $persianNumbers, $number);
}
$input = $_POST['number'];
if (!preg_match('/^[0-9]+$/', $input)) {
    echo json_encode(['error' => 'لطفا عدد انگلیسی وارد کنید!']);
    exit;
}
$persianNumber = convertToPersian($input);
echo json_encode(['persianNumber' => $persianNumber]);
?>