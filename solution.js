// JavaScript код, который генерирует PHP код
const phpCode = `
<?php
// PHP код, который выводит оригинальный JavaScript код
$javascriptCode = <<<'EOD'
console.log("This is the original JavaScript code:");
console.log('console.log("This is the original JavaScript code:");');
EOD;
echo $javascriptCode;
?>
`;

// Выводим PHP код в консоль
console.log(phpCode.trim());
