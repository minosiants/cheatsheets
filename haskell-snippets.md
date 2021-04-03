 
# Haskell snippets



`on` usage 

```haskell 
import Data.Function  
import Data.List

v = fst $ head $
    head $
    map (filter (\([x, y, _], _) -> x /= y)) $
    filter (\l -> length l > 1) $
    groupBy ((==) `on` snd) $
    sortBy (compare `on` snd) $
      nub [(sort [x, y, z], x + y + z) | x <- [1..36],
        y <- [1..36],
        z <- [1..36],
        x * y * z == 36]
