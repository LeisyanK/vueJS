<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script type="text/javascript">
        $(function() {
            $('#orderCall').click(function(){
                $('#popupContainer').css('display', 'flex');
            });
            $('#popupContainer').click(function(event){
                // $('#popupContainer') выдает jQuery объект, а this -это html-объект
                if (event.target === this ) {  //$('#popupContainer')) {
                    $('#popupContainer').css('display', 'none');
                }
                
            })
        })
    </script>
    
    <!-- <script type="text/javascript">
        function calculate() {
            // var moneyAmount = 100;
            var moneyAmount = document.getElementById('moneyAmount').value;

            var cappucinoPrice = 120;
            var waterPrice = 20;

            if (moneyAmount >= cappucinoPrice) {
                console.log('Вы можете купить капучино');
            }
            if (moneyAmount >= waterPrice) {
                console.log('Вы можете купить воду');
            }
        }
    </script> -->
</head>
<body>
    <div id="popupContainer">
        <div id="popup">
            <h2>Отправить заявку</h2>
        </div>
    </div>
    <header>
        <div class="fixed-width">
            <nav>
                <a href="#">Услуги</a>
                <a href="#">Портфолио</a>
                <a href="#">Стоимость</a>
            </nav>
            <div class="contact-container">
                <span class="" id="phone">+7 495 9999999</span>
                <button id="orderCall" > <!--</button>onclick="calculate()">-->
                    Заказать звонок </button>
            </div>
        </div>
    </header>
    <input type="text" id="moneyAmount">
    <?
        echo '<h2>' . date("d.m.Y H:i:s") . '</h2>';
    ?>
</body>
</html>