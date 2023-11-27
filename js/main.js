// 1. Написать функцию, которая создает одномерный массив длины N и заполняет его случайными целыми числами в диапазоне от -10 до 10.
//   createRandomArr(5) // => [1, -10, 2, 3, 0]
//   createRandomArr(8) // => [-2, -1, 3, 4, 1, 0, 1, -5]

const createRandomArr = (length) => {
  const arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(Math.floor(Math.random() * 21) - 10);
  }
  return arr;
};

// 2. Написать функцию, которая принимает на вход одномерный массив и возвращает объект который содержит информацию о количестве вхождений каждого значения.
//   getCountOfArrValues([1, 2, 3, 1, 2, 4]) // => {1: 2, 2: 2, 3: 1, 4: 1}
//   getCountOfArrValues(['Ivan', 'Fedor', 'Ivan', 'Vasya', 'Petya']) // => {'Ivan': 2, 'Fedor': 1, 'Petya': 1, 'Vasya': 1}

const getCountOfArrValues = (arr) => {
  const verification = arr.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  return verification;
};

// 3. Написать функцию, которая принимает на вход одномерный числовой массив и сортирует его. В этой задаче нельзя использовать встроенный метод сортировки Array.sort(). Сортировка должна быть выполнена любым подходящим алгоритмом (например: пузырьком, вставками, слиянием и т.п.)
//   const arr = [2,3,51,3,6]
//   arraySort(arr)
//   console.log(arr) // => [2, 3, 3, 6, 51]
