class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let loadFactor = this.count / this.capacity

    if (loadFactor >= 0.7){
      this.resize();
    }

    const newPair = new KeyValuePair(key, value);
    let hashKey = this.hashMod(key);
    let currentBucket = this.data[hashKey];


    if (!currentBucket){
      this.data[hashKey] = newPair;
    } else {
      while (currentBucket){
        if (currentBucket.key === key){
          currentBucket.value = value;
          return;
        }

        currentBucket = currentBucket.next;
      }

      newPair.next = this.data[hashKey];
      this.data[hashKey] = newPair;
    }

    this.count++;
  }


  read(key) {
    let currentBucket = this.data[this.hashMod(key)];

    while (currentBucket){
      if (currentBucket.key === key){
        return currentBucket.value;
      }

      currentBucket = currentBucket.next
    }

  }


  resize() {
    let oldData = this.data;
    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;

    for (let i = 0; i < oldData.length; i++){
      let bucket = oldData[i];

      while (bucket){
        this.insert(bucket.key, bucket.value);
        bucket = bucket.next;
      }
    }

  }


  delete(key) {
    let hashKey = this.hashMod(key);
    let currentBucket = this.data[hashKey];

    if (!currentBucket) return "Key not found";

    if (currentBucket.key === key){
      this.data[hashKey] = currentBucket.next;
      this.count--;
      return;
    }

    while (currentBucket.next){
      if (currentBucket.next.key === key){
        this.data[hashKey].next = currentBucket.next.next;
        this.count--;
        return
      }
      currentBucket = currentBucket.next;
    }

    return "Key not found"

  }
}

module.exports = HashTable;
