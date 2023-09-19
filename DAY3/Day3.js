


let h2 = document.createElement("h1");
h2.innerText = "Sơ lược về mô hình Client-Server và giao thức HTTP";
document.body.appendChild(h2);

let first = document.createElement("h2");
first.innerText = "1. Mô hình Client-Server"
document.body.appendChild(first);

let body = document.createElement("p");
body.innerText = "Để hiểu được mô hình Client-Server, chúng ta hãy lấy 1 ví dụ nhỏ là: bạn muốn biết thời tiết của thành phố trong hôm nay.Để làm điều này, bạn sẽ cần hỏi một người biết về điều kiện thời tiết ở thành phố. Giả sử chưa có máy tính, bạn có thể biết được thông tin thời tiết qua báo, đài. Trong quá trình này, có hai người tham gia riêng biệt. Đầu tiên là bạn, người muốn biết thông tin về thời tiết. Người thứ hai là báo hoặc đài, người cung cấp thông tin về thời tiết. Nếu đặt tên cho hai người tham gia này, chúng ta có. :Người tiêu dùng muốn biết một thông tin cụ thể, là người đưa ra yêu cầu, hay còn được gọi là Client trong ngữ cảnh Client-server.Nhà cung cấp thông tin, là người tiếp nhận yêu cầu và xử lý nó, hay còn gọi là Server trong ngữ cảnh Client-server.";
document.body.appendChild(body);

let second = document.createElement("h2");
second.innerText = "1.1. Thế nào là Client";
document.body.appendChild(second);

let body_second = document.createElement("p");
body_second.innerText = "Client trong mô hình client/server, người ta còn định nghĩa cụ thể cho một máy client là một máy trạm mà chỉ được sử dụng bởi 1 người dùng.Máy client có thể sử dụng các hệ điều hành bình thường như Win9x, DOS, OS/2...Bản thân mỗi một client cũng đã được tích hợp nhiều chức năng trên hệ điều hành mà nó chạy, nhưng khi được nối vào một mạng LAN, WAN theo mô hình client/server thì nó còn có thể sử dụng thêm các chức năng do hệ điều hành mạng (NOS) cung cấp với nhiều dịch vụ khác nhau (cụ thể là các dịch vụ do các server trên mạng này cung cấp), ví dụ như nó có thể yêu cầu lấy dữ liệu từ một server hay gửi dữ liệu lên server đó...Thực tế trong các ứng dụng của mô hình client/server, các chức năng hoạt động chính là sự kết hợp giữa client và server với sự chia sẻ tài nguyên, dữ liệu trên cả hai máy vai trò của client Trong mô hình client/server, client được coi như là người sử dụng các dịch vụ trên mạng do một hoặc nhiều máy chủ cung cấp và server được coi như là người cung cấp dịch vụ để trả lời các yêu cầu của các clients.Điều quan trọng là phải hiểu được vai trò hoạt động của nó trong một mô hình cụ thể, một máy client trong mô hình này lại có thể là server trong một mô hình khác. Ví dụ cụ thể như một máy trạm làm việc như một client bình thường trong mạng LAN nhưng đồng thời nó có thể đóng vai trò như một máy in chủ (printer server) cung cấp dịch vụ in ấn từ xa cho nhiều người khác (clients) sử dụng. Client được hiểu như là bề nổi của các dịch vụ trên mạng, nếu có thông tin vào hoặc ra thì chúng sẽ được hiển thị trên máy client.";
document.body.appendChild(body_second);

let third = document.createElement("h2")
third.innerText = "2. Giao thức HTTP";
document.body.appendChild(third);

let body_third = document.createElement("p")
body_third.innerText = "Nếu thảo luận về ví dụ trên, bạn có thể đọc báo hoặc nghe đài để biết được thông tin về thời tiết. Báo đài sử dụng ngôn ngữ địa phương của bạn và bạn có thể hiểu được những gì viết trên báo hoặc nói trên đài.Tuy nhiên, đối với Client và Server trên Web chúng ta cần phải có một phương thức giao tiếp, cụ thể là một giao thức để hai hệ thống có thể hiểu và tương tác với nhau. Giao thức này được gọi là giao thức truyền thông HTTP.Client và Server được kết nối với nhau bằng giao thức HTTP. Khi kết nối được thiết lập, Client sẽ gửi yêu cầu tới Server dưới dạng XML hoặc Json mà cả hai đều có thể hiểu được. Sau khi hiểu yêu cầu, Server sẽ trả về một response (phản hồi) để trả về dữ liệu mà Client yêu cầu dưới dạng XML hoặc Json."
document.body.appendChild(body_third);
