var tieuDe = "Giới thiệu về nhóm 9";
var moTa =
    "Nhóm 9 gồm 4 sinh viên lớp K66 Đại học Sư phạm Tin học, Trường Đại học Tây Bắc. " +
    "Website này là sản phẩm của chúng tôi trong học phần Lập trình web.";

var danhSachTab = [
    {
        nhan: "Chúng tôi là ai",
        tieuDe: "Bốn sinh viên, một nhóm học tập",
        noiDung:
            "Chúng tôi cùng học ngành Sư phạm Tin học và cùng yêu thích công nghệ. " +
            "Mỗi người có một thế mạnh riêng, từ thiết kế, thể thao đến robotics, " +
            "và chúng tôi bổ trợ cho nhau khi làm bài tập nhóm.",
        danhSach: ["Lớp K66 ĐHSP Tin học", "4 thành viên", "Trường Đại học Tây Bắc"]
    },
    {
        nhan: "Mục tiêu",
        tieuDe: "Học bài bản, làm được sản phẩm thật",
        noiDung:
            "Chúng tôi muốn nắm chắc HTML và CSS, tự thiết kế được một website hoàn chỉnh, " +
            "rồi vận dụng vào việc giảng dạy và công việc cá nhân sau này.",
        danhSach: [
            "Nắm vững kiến thức nền tảng về thiết kế web",
            "Tự xây dựng website cho bản thân",
            "Áp dụng vào giảng dạy Tin học"
        ]
    },
    {
        nhan: "Công nghệ sử dụng",
        tieuDe: "Những gì đã dùng để làm trang này",
        noiDung: "Trang web được xây dựng bằng ba công nghệ cơ bản của web.",
        danhSach: [
            "HTML: dựng cấu trúc trang",
            "CSS: trình bày và bố cục",
            "JavaScript: hiệu ứng gõ chữ và phần giới thiệu này"
        ]
    }
];

var cumChuGo = [
    "đam mê lập trình web.",
    "là sinh viên K66 ĐHSP Tin học.",
    "cùng học hỏi và chia sẻ kiến thức.",
    "là nhóm 9. Rất vui được gặp bạn!"
];

var thanhVien = [
    {
        ten: "Trần Ngọc Sơn",
        anh: "image/Sukien.jpg",
        vaiTro: "K66 ĐHSP Tin học",
        gioiThieu:
            "Em xin chào thầy và các bạn, em tên là Trần Ngọc Sơn thành viên K66 ĐHSP Tin học. " +
            "Bản thân em yêu thích công nghệ nói chung, và học về mã lập trình hay code nói riêng. " +
            "May mắn được tiếp xúc sớm với công nghệ và có một người thầy dạy Tin tận tâm dẫn dắt, " +
            "em đã được hướng tới con đường SP Tin. Em rất vui khi được học bộ môn \"Lập trình web\", " +
            "bản thân em cảm thấy được học, được viết code bài bản thực sự rất vui và thú vị.",
        kyNang: ["Role: Coder"],
        idHoSo: "son",
        facebook: "https://www.facebook.com/son.tranngoc.9"
    },
    {
        ten: "Tòng Duy Anh",
        anh: "image/Duyanh.jpg",
        vaiTro: "K66 ĐHSP Tin học",
        gioiThieu:
            "Em tên là Tòng Duy Anh sinh viên của lớp k66 ĐHSP tin. " +
            "Quê quán của em ở Thanh An - Điện Biên. Sở thích của em là chơi game, chơi thể thao và nghe nhạc. " +
            "Mục tiêu của em khi học môn \"Thiết kế web\" là bản thân mình sẽ học tốt môn này " +
            "để áp dụng được vào thực tế để giảng dạy cũng như sử dụng cho công việc cá nhân của bản thân sau này.",
        kyNang: ["Role: Tester"],
        idHoSo: "duyanh",
        facebook: "https://www.facebook.com/tong.duyanh.13012007"
    },
    {
        ten: "Lềm Việt Thành",
        anh: "image/VT.jpg",
        vaiTro: "K66 ĐHSP Tin học",
        gioiThieu:
            "Chào thầy và các bạn. " +
            "Em là Việt Thành, một sinh viên K66 ngành Sư phạm Tin học, " +
            "em luôn mong muốn kết hợp tư duy logic của lập trình với tâm lý học giáo dục để truyền đạt kiến thức tốt hơn. " +
            "Mục tiêu đến với môn học là nắm bắt được kiến thức cơ bản về môn học Thiết kế Web, " +
            "tìm hiểu sâu hơn về HTML, CSS để bản thân có thể tự thiết kế một website cho bản thân mình, " +
            "cũng như công việc dạy học sau này.",
        kyNang: ["Role: Design"],
        idHoSo: "vietthanh",
        facebook: "https://www.facebook.com/viet.thanh.322712"
    },
    {
        ten: "Hà Văn Khuê",
        anh: "image/Khue.jpg",
        vaiTro: "K66 ĐHSP Tin học",
        gioiThieu:
            "Em là Hà Văn Khuê ,đến từ Tỉnh Phú Thọ , " +
            "là tsinh viên lớp K66 Sư phạm Tin học, Trường Đại học Tây Bắc. " +
            "Em có niềm đam mê với công nghệ cũng như ngành sư phạm. " +
            "Rất vui khi được học môn ‘Thiết kế web ‘của thầy rất mong " +
            "được sự hỗ trợ giúp đỡ của thầy trong học phần này.\n" +
            "Em cảm ơn thầy !",
        kyNang: ["Role: Sport"],
        idHoSo: "khue",
        facebook: "https://web.facebook.com/share/1Hk7yNemvR/"
    }
];

var elGoChu = document.getElementById("typing-text");
var chiSoCum = 0;
var chiSoKyTu = 0;
var dangXoa = false;

function goChu() {
    var cum = cumChuGo[chiSoCum];
    elGoChu.textContent = cum.substring(0, chiSoKyTu);

    var doTre = dangXoa ? 35 : 70;

    if (!dangXoa && chiSoKyTu === cum.length) {
        dangXoa = true;
        doTre = 1600;
    } else if (dangXoa && chiSoKyTu === 0) {
        dangXoa = false;
        chiSoCum = (chiSoCum + 1) % cumChuGo.length;
        doTre = 400;
    } else if (dangXoa) {
        chiSoKyTu = chiSoKyTu - 1;
    } else {
        chiSoKyTu = chiSoKyTu + 1;
    }
    setTimeout(goChu, doTre);
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elGoChu.textContent = cumChuGo[0];
} else {
    goChu();
}

var goc = document.getElementById("intro-root");
goc.innerHTML = "";

var h2 = document.createElement("h2");
h2.textContent = tieuDe;

var pMoTa = document.createElement("p");
pMoTa.className = "intro-lead";
pMoTa.textContent = moTa;

var thanhTab = document.createElement("div");
thanhTab.className = "intro-tabs";
thanhTab.setAttribute("role", "tablist");
thanhTab.setAttribute("aria-label", "Nội dung giới thiệu");

var khungNoiDung = document.createElement("div");
khungNoiDung.className = "intro-panel";
khungNoiDung.setAttribute("role", "tabpanel");
khungNoiDung.id = "intro-panel";
khungNoiDung.tabIndex = 0;

var cacNutTab = [];

function hienTab(i) {
    var tab = danhSachTab[i];

    for (var k = 0; k < cacNutTab.length; k++) {
        var dangChon = (k === i);
        cacNutTab[k].setAttribute("aria-selected", String(dangChon));
        cacNutTab[k].tabIndex = dangChon ? 0 : -1;
    }

    khungNoiDung.innerHTML = "";
    khungNoiDung.setAttribute("aria-labelledby", "intro-tab-" + i);

    var h3 = document.createElement("h3");
    h3.textContent = tab.tieuDe;

    var p = document.createElement("p");
    p.textContent = tab.noiDung;

    var ul = document.createElement("ul");
    for (var j = 0; j < tab.danhSach.length; j++) {
        var li = document.createElement("li");
        li.textContent = tab.danhSach[j];
        ul.appendChild(li);
    }

    khungNoiDung.appendChild(h3);
    khungNoiDung.appendChild(p);
    khungNoiDung.appendChild(ul);
}

function taoNutTab(i) {
    var nut = document.createElement("button");
    nut.type = "button";
    nut.className = "intro-tab";
    nut.id = "intro-tab-" + i;
    nut.setAttribute("role", "tab");
    nut.setAttribute("aria-controls", "intro-panel");

    var nhan = document.createElement("span");
    nhan.textContent = danhSachTab[i].nhan;
    nut.appendChild(nhan);

    nut.addEventListener("click", function () {
        hienTab(i);
    });

    nut.addEventListener("keydown", function (e) {
        var tiep = -1;
        if (e.key === "ArrowRight") tiep = (i + 1) % danhSachTab.length;
        if (e.key === "ArrowLeft")  tiep = (i - 1 + danhSachTab.length) % danhSachTab.length;
        if (tiep !== -1) {
            e.preventDefault();
            hienTab(tiep);
            cacNutTab[tiep].focus();
        }
    });
    return nut;
}

for (var i = 0; i < danhSachTab.length; i++) {
    var nutTab = taoNutTab(i);
    cacNutTab.push(nutTab);
    thanhTab.appendChild(nutTab);
}

goc.appendChild(h2);
goc.appendChild(pMoTa);
goc.appendChild(thanhTab);
goc.appendChild(khungNoiDung);
hienTab(0);

function taoThe(tenThe, tenClass, noiDung) {
    var el = document.createElement(tenThe);
    if (tenClass) el.className = tenClass;
    if (noiDung) el.textContent = noiDung;
    return el;
}

function taoTheThanhVien(tv) {
    var the = taoThe("article", "member-card");

    var khungAnh = taoThe("div", "member-image");
    var anh = document.createElement("img");
    anh.src = tv.anh;
    anh.alt = tv.ten;
    khungAnh.appendChild(anh);

    var noiDung = taoThe("div", "member-content");
    noiDung.appendChild(taoThe("h3", "", tv.ten));
    noiDung.appendChild(taoThe("p", "member-role", tv.vaiTro));

    var moTaTV = taoThe("p", "member-description");
    var cacDong = tv.gioiThieu.split("\n");
    for (var d = 0; d < cacDong.length; d++) {
        if (d > 0) moTaTV.appendChild(document.createElement("br"));
        moTaTV.appendChild(document.createTextNode(cacDong[d]));
    }
    noiDung.appendChild(moTaTV);

    var khungKyNang = taoThe("div", "skills");
    for (var k = 0; k < tv.kyNang.length; k++) {
        khungKyNang.appendChild(taoThe("span", "", tv.kyNang[k]));
    }
    noiDung.appendChild(khungKyNang);

    var khungNut = taoThe("div", "member-actions");
    var nutHoSo = taoThe("a", "detail-button", "Xem hồ sơ");
    nutHoSo.href = "#" + tv.idHoSo;
    var nutFb = taoThe("a", "facebook-button", "Facebook");
    nutFb.href = tv.facebook;
    nutFb.target = "_blank";
    nutFb.rel = "noopener noreferrer";
    khungNut.appendChild(nutHoSo);
    khungNut.appendChild(nutFb);
    noiDung.appendChild(khungNut);

    the.appendChild(khungAnh);
    the.appendChild(noiDung);
    return the;
}

var luoiThanhVien = document.getElementById("member-grid");
for (var m = 0; m < thanhVien.length; m++) {
    luoiThanhVien.appendChild(taoTheThanhVien(thanhVien[m]));
}
