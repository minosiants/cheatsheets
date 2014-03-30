---
title: Haskell
layout: default
---

### http://www.haskell.org/hoogle/

## Pattern matching
### Where p.43 
`
bmiTell :: Double -> Double -> String 
bmiTell weight height 
| bmi <= 18.5 = "You're underweight, you emo, you!"
| bmi <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"
| bmi <= 30.0 = "You're fat! Lose some weight, fatty!"
| otherwise = "You're a whale, congratulations!"
where bmi = weight / height ^ 2
`
**Where with function**
`calcBmis :: [(Double, Double)] -> [Double] 
calcBmis xs = [bmi w h | (w, h) <- xs] 
where bmi weight height = weight / height ^ 2`

