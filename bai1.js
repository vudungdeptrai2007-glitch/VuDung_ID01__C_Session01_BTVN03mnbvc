let books = [
    {
        bookCode: "B01",
        title: "Lập trình JavaScript",
        category: "Công nghệ thông tin",
        price: 150000,
        totalCopies: 10,
        availableCopies: 3,
        shelfLocation: "Kệ A1"
    },
    {
        bookCode: "B02",
        title: "Cơ sở dữ liệu",
        category: "Công nghệ thông tin",
        price: 180000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "Kệ A2"
    },
    {
        bookCode: "B03",
        title: "Lập trình Python",
        category: "Lập trình",
        price: 200000,
        totalCopies: 12,
        availableCopies: 7,
        shelfLocation: "Kệ B1"
    }
];

// CREATE: Thêm sách mới vào kho
let newBook = {
    bookCode: "B04",
    title: "Lập trình C++",
    category: "Lập trình",
    price: 170000,
    totalCopies: 6,
    availableCopies: 6,
    shelfLocation: "Kệ B2"
};

books.push(newBook);

// UPDATE: Sinh viên mượn sách B01
let borrowBook = books.find(function(book) {
    return book.bookCode === "B01";
});

if (borrowBook) {
    if (borrowBook.availableCopies > 0) {
        borrowBook.availableCopies--;

        if (borrowBook.availableCopies === 0) {
            borrowBook.status = "HẾT SÁCH TRÊN KỆ";
        }
    } else {
        console.log("Không thể cho mượn: Sách đã hết trên kệ.");
    }
}

// UPDATE: Chuyển vị trí kệ của B02
let moveBook = books.find(function(book) {
    return book.bookCode === "B02";
});

if (moveBook) {
    moveBook.shelfLocation = "Kệ C1";
}

// DELETE: Thanh lý sách B03
let deleteIndex = -1;

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B03") {
        deleteIndex = i;
        break;
    }
}

if (deleteIndex !== -1) {
    books.splice(deleteIndex, 1);
}

// READ: Kiểm kê kho
let totalCopies = 0;
let totalAssetValue = 0;

for (let i = 0; i < books.length; i++) {
    totalCopies += books[i].totalCopies;
    totalAssetValue += books[i].totalCopies * books[i].price;
}

// In bảng kiểm kê
console.log("==============================================================");
console.log("                  BẢNG KIỂM KÊ KHO SÁCH");
console.log("==============================================================");

for (let i = 0; i < books.length; i++) {
    let book = books[i];

    console.log(
        `${book.bookCode} | ${book.title} | Tổng: ${book.totalCopies} | Còn: ${book.availableCopies} | ${book.shelfLocation}`
    );

    if (book.status) {
        console.log(`Trạng thái: ${book.status}`);
    }
}

console.log("--------------------------------------------------------------");
console.log("Tổng số lượng sách:", totalCopies);
console.log("Tổng giá trị tài sản:", totalAssetValue.toLocaleString("vi-VN") + " VNĐ");
console.log("==============================================================");