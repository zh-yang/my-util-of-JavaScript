

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <ul id="delegate1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <hr>
  <ul  id="delegate2">
    <li><span>1</span></li>
    <li><span>2</span></li>
    <li><span>3</span></li>
  </ul>

  <script>
      var dom1 = document.querySelector('#delegate1')
      var dom2 = document.querySelector('#delegate2')

      dom1.addEventListener('click', function (e) {
        console.log(e.target.tagName)
        if(e.target.tagName.toLowerCase() === 'li'){
          console.log(111)
        }
      })

      function delegate(element, eventType, selector, fn) {
        element.addEventListener(eventType, e=>{
          let el = e.target

          while (!el.matches(selector)){
            console.log(el.tagName)
            if(element === el){
              el = null
              break
            }
            el = el.parentNode
          }
          el && fn.call(el, e, el)
        })
        return element
      }

      delegate(dom2, 'click', 'li', function(e){console.log(222,e.target.tagName)})

  </script>
</body>
</html>
