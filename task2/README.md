# calc-server #

### Technology ###
* [Node.js](https://nodejs.org/en/)

### Prerequisite ###
```
git clone https://github.com/prapansak/calc-server.git
npm install -g nodemon
npm install
```

### Development ###
```
npm run dev
```

### Build ###
```
npm run build
```
* Copy `files` and `.env` file into build directory.

## API Document ###
### Calculator - Plus
Use Postman to test APIs.

<kbd>POST</kbd>
```
/plus
```
Parameter
| Field         | Type          | Description  |
| ------------- | ------------- | ------------ |
| inputA        | Number        |              |
| inputB        | Number        |              |

### Calculator - Minus
<kbd>POST</kbd>
```
/minus
```
Parameter
| Field         | Type          | Description  |
| ------------- | ------------- | ------------ |
| inputA        | Number        |              |
| inputB        | Number        |              |

### Calculator - Multiply
<kbd>POST</kbd>
```
/multiply
```
Parameter
| Field         | Type          | Description  |
| ------------- | ------------- | ------------ |
| inputA        | Number        |              |
| inputB        | Number        |              |

### Calculator - Divide
<kbd>POST</kbd>
```
/divide
```
Parameter
| Field         | Type          | Description  |
| ------------- | ------------- | ------------ |
| inputA        | Number        |              |
| inputB        | Number        |              |

### Calculator - Pow
<kbd>POST</kbd>
```
/pow
```
Parameter
| Field         | Type          | Description  |
| ------------- | ------------- | ------------ |
| inputA        | Number        |              |
| inputB        | Number        |              |

### Calculator - Load
<kbd>POST</kbd>
```
/load
```
Parameter
| Field         | Type          | Description  |
| ------------- | ------------- | ------------ |
| id            | String        | Unique id    |

### Calculator - Save
<kbd>POST</kbd>
```
/save
```
Parameter
| Field         | Type          | Description  |
| ------------- | ------------- | ------------ |
| id            | String        | Unique id    |
| inputA        | String        |              |
| inputB        | String        |              |
| operator      | String        |              |
| result        | String        |              |