document.getElementById('evolveButton').addEventListener('click', function() {
    var level = document.getElementById('evolutionLevel').value;
    var successRate;

    switch(level) {
        case '1':
            successRate = 1; 
            break;
        case '2':
            successRate = 1; 
            break;
        case '3':
            successRate = 0.81; 
            break;
        case '4':
            successRate = 0.64;
            break;
        case '5':
            successRate = 0.5;
            break;
        case '6':
            successRate = 0.26;
            break;
        case '7':
            successRate = 0.15;
            break;
        case '8':
            successRate = 0.07;
            break;
        case '9':
            successRate = 0.04;
            break;
        case '10':
            break;
            successRate= 0.02;        
        default:
            successRate = 0;
    }

    
    setTimeout(function() {
        const isSuccess = Math.random() < successRate;
        const resultElement = document.getElementById('evolutionResult');
        
        // 결과 텍스트와 스타일 설정
        if (isSuccess) {
            resultElement.textContent = 'ㅤㅤ진화 성공';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'ㅤㅤ진화 실패';
            resultElement.style.color = 'red';
        }
        
        // 애니메이션을 위해 display 속성 변경 및 fade-in 클래스 추가
        resultElement.style.display = 'block';
        resultElement.classList.add('fade-in');

        // 다음 클릭을 위해 애니메이션 클래스를 제거
        setTimeout(function() {
            resultElement.classList.remove('fade-in');
        }, 3000); // 애니메이션 지속 시간과 일치

    }); 
});