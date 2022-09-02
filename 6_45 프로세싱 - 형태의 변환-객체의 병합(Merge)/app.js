
const sourceObject = {
  traits: {
    first_name: {
      value: 'Bob',
      source_id: 1,
      updated_at: 1623238587468
    },
    emails_opened_last_30_days:{
      value: 33,
      source_id: 2,
      updated_at: 1623238601089
    }
  },
  cursor: {
    url: '/v1/spaces/lgJ4AAjFN4',
    has_more: false,
    next: ''
  }
};

// 깊은 복사
const newObject1 = JSON.parse(JSON.stringify(sourceObject));
// 얕은 복사
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = {...sourceObject};

console.log(sourceObject.traits.first_name.source_id);

newObject1.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

newObject2.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

newObject3.traits.first_name.source_id = 500;

console.log(sourceObject.traits.first_name.source_id);

function deepCopyObject(obj){
  const clone = {};
  for (const key in obj){
    if(typeof obj[key] == "object" && obj[key] != null){
      clone[key] = deepCopyObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

const newObject4 = deepCopyObject(sourceObject);

console.log(sourceObject.traits.first_name.source_id);

newObject4.traits.first_name.source_id = 1000;

console.log(sourceObject.traits.first_name.source_id);

const store = {
  user: null,
  cart: [],
  config: {
    multiDevice: false,
    lastLoginDate: 'Wed Jun 09 2021 20:46:55 GMT+0900',
  }
}

const newObject5 = {
  ...deepCopyObject(store),
  config:{
    ...store.config,
    lastLoginDate: new Date(),
  },
};

console.log(newObject5);

const DefaultStyle = {
  color: '#fff',
  contColor: '#999',
  fontSize:14,
  fontWeight: 200,
};

function createParagraph(config){
  config = {...DefaultStyle, ...config};

  console.log(config);
}

createParagraph({ fontSize: 12 });