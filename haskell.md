---
title: Haskell
layout: default
---
### Installation
[Haskell platform]( https://www.haskell.org/platform/linux.html#linux-generic)

Issues : 

  when run ghci got this error
  ```
  can't load .so/.DLL for: libgmp.so  
  ```
  to fix it run
  
  ```
  sudo apt install libgmp-dev
  ```
### ADT

```

data GuessWhat = 
Chickenbutt deriving (Eq, Sho)

data Id a = 
   MkId a deriving (Eq, Show)

data Product a b =
   Product a b deriving (Eq, Show)

data Sum a b =
    First a 
  | Second b 
  deriving (Eq, Show)

data RecordProduct a b =
   RecordProduct { pfirst :: a
                 , psecond :: b }
                 deriving (Eq, Show)

newtype NumCow = NumCow Int deriving (Eq, Show)
newtype NumPig = NumPig Int deriving (Eq, Show)

data Farmhouse = Farmhouse NumCow NumPig deriving (Eq, Show)
type Farmhouse' = Product NumCow NumPig 

newtype NumSheep = NumSheep Int deriving (Eq, Show)

data BigFarmhouse = BigFarmhouse NumCow NumPig NumSheep deriving (Eq, Show)
type BigFarmhouse' = Product NumCow (Product NumPig NumSheep)

```
#### import modules

```haslell
import qualified Data.Bool as B

import Control.Monad (forever, when)
```
#### split by 2
```haskell 
splitBy2 = takeWhile (not . null) . unfoldr (Just . splitAt 2)
```
#### uncurry
```haskell
summed :: Num c => (c, c) -> c
summed t = uncurry (+) t
```
#### check bit 
```haskell
-- testBit can be used from Data.Bits
((shiftR _n op) .&. 1) == 1
```
#### LambdaCase extention
```haskell
{-# LANGUAGE LambdaCase #-}
datum = \case
  Empty -> error "datum of empty LinkedList"
    Cons a _ -> a
```    

#### Strict [foldl'](https://hackage.haskell.org/package/base-4.14.0.0/docs/Data-List.html#v:foldl-39-)
```haskell
foldl' :: (b -> a -> b) -> b -> [a] -> b
foldl' f z0 xs = foldr f' id xs z0
      where f' x k z = k $! f z x
```      
*[seq](https://wiki.haskell.org/Seq)* 
`seq :: a -> b -> b`  
`it is magically strict in its first argument` 

#### [Alternative](https://hackage.haskell.org/package/base-4.14.0.0/docs/Control-Applicative.html#g:2)
`<|>` `many` `some` 
```haskell
p123 :: Parser String
p123 = string "123" <|> string "12" <|> string "1"
```


#### [QuasiQuotes](https://wiki.haskell.org/Quasiquotation)
```haskell 
{-# LANGUAGE QuasiQuotes #-}

eitherOr = [r|
123
abc
456
def
|]
```
#### Convert word8 to word32
```haskell
conv :: [Word8] -> Word32
conv = foldl (\acc b -> (acc `shiftL` 8) .|. (fromIntegral b)) 0
```
#### Map with list vals
```haskell
M.fromListWith (++) [(k, [v]) | ((k, v) <- r
```
#### Records
```data ClientR = 
      GovOrgR { clientRName :: String }  
      | CompanyR { clientRName :: String, companyId :: Integer, person :: PersonR, duty :: String}
      | IndividualR { person :: PersonR } 
      deriving Show

```
#### Extensions

[View pattern](https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/exts/view_patterns.html#]
```
size (view -> Unit) = 1
size (view -> Arrow t1 t2) = size t1 + size t2
```
[Record puns](https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/exts/record_puns.html]   
 ```f (C {a}) = a  
 ```
[Record wildcards](https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/exts/record_wildcards.html]  

 `f (C {a = 1, ..}) = b + c + d`  
 

