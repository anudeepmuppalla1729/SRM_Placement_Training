# MongoDB Notes with Commands and Examples

## 1. use

Create or switch to a database.

```js
use trainingCenterDB
```

Output:

```js
switched to db trainingCenterDB
```

---

## 2. createCollection()

Create a collection.

```js
db.createCollection("students")
```

Output:

```js
{ ok: 1 }
```

---

## 3. insertOne()

Insert a single document.

```js
db.students.insertOne({
  studentName: "Vikram",
  age: 21,
  course: "Python"
})
```

Output:

```js
{
  acknowledged: true,
  insertedId: ObjectId("64ab12cd34ef567890abcd12")
}
```

---

## 4. insertMany()

Insert multiple documents.

```js
db.trainers.insertMany([
  {
    name: "Priya",
    department: "Web Development",
    experience: 6
  },
  {
    name: "Arjun",
    department: "Data Science",
    experience: 9
  },
  {
    name: "Meera",
    department: "Cyber Security",
    experience: 4
  }
])
```

Output:

```js
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64ab12cd34ef567890abcd13"),
    '1': ObjectId("64ab12cd34ef567890abcd14"),
    '2': ObjectId("64ab12cd34ef567890abcd15")
  }
}
```

---

## 5. find()

Display all documents.

```js
db.trainers.find()
```

Output:

```js
[
  {
    name: "Priya",
    department: "Web Development",
    experience: 6
  },
  {
    name: "Arjun",
    department: "Data Science",
    experience: 9
  },
  {
    name: "Meera",
    department: "Cyber Security",
    experience: 4
  }
]
```

---

## 6. findOne()

Display the first matching document.

```js
db.trainers.findOne({
  department: "Data Science"
})
```

Output:

```js
{
  name: "Arjun",
  department: "Data Science",
  experience: 9
}
```

---

## 7. $gt (Greater Than)

Find gadgets with cost greater than 3000.

```js
db.gadgets.find({
  cost: { $gt: 3000 }
})
```

Output:

```js
[
  {
    gadgetName: "Smart Watch",
    cost: 4500
  }
]
```

---

## 8. $set

Used to update field values.

```js
{
  $set: {
    stipend: 25000
  }
}
```

No direct output. Used with update commands.

---

## 9. updateOne()

Update a single document.

```js
db.interns.updateOne(
  { name: "Suresh" },
  { $set: { stipend: 25000 } }
)
```

Output:

```js
{
  acknowledged: true,
  matchedCount: 1,
  modifiedCount: 1
}
```

---

## 10. updateMany()

Update multiple documents.

```js
db.courses.updateMany(
  { level: "Beginner" },
  { $set: { level: "Foundation" } }
)
```

Output:

```js
{
  acknowledged: true,
  matchedCount: 4,
  modifiedCount: 4
}
```

---

## 11. deleteOne()

Delete one document.

```js
db.members.deleteOne({
  name: "Kishore"
})
```

Output:

```js
{
  acknowledged: true,
  deletedCount: 1
}
```

---

## 12. deleteMany()

Delete multiple documents.

```js
db.payments.deleteMany({
  paymentStatus: "Failed"
})
```

Output:

```js
{
  acknowledged: true,
  deletedCount: 5
}
```

---

## 13. sort()

Sort documents.

Ascending Order:

```js
db.gadgets.find().sort({
  cost: 1
})
```

Output:

```js
1500
2800
4500
```

Descending Order:

```js
db.gadgets.find().sort({
  cost: -1
})
```

Output:

```js
4500
2800
1500
```

---

## 14. countDocuments()

Count documents in a collection.

```js
db.trainers.countDocuments()
```

Output:

```js
3
```

---

# Complete Sample Data

```js
use trainingCenterDB

db.createCollection("trainers")

db.trainers.insertMany([
  {
    name: "Priya",
    department: "Web Development",
    experience: 6
  },
  {
    name: "Arjun",
    department: "Data Science",
    experience: 9
  },
  {
    name: "Meera",
    department: "Cyber Security",
    experience: 4
  }
])
```
