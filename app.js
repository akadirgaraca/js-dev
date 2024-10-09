
let calisanlar = [0];
function calisanEkle(isim, yas, departman, maas) {
    if (isim === "") {
        console.log("Hata: İsim boş olamaz.");
        return;
    }
    if (yas < 18) {
        console.log("Hata: Yaş 18'den küçük olamaz.");
        return;
    }
    if (maas < 0) {
        console.log("Hata: Maaş negatif olamaz.");
        return;
    }
    for (let i = 0; i < calisanlar.length; i++) {
        if (calisanlar[i].isim === isim) {
            console.log("Hata: Bu isimde bir çalışan zaten var.");
            return;
        }
    }
    calisanlar.push({ isim: isim, yas: yas, departman: departman, maas: maas });
    console.log(isim + " başarıyla eklendi.");
}
function calisanGuncelle(isim, yeniYas, yeniDepartman, yeniMaas) {
    for (let i = 0; i < calisanlar.length; i++) {
        if (calisanlar[i].isim === isim) {
            calisanlar[i].yas = yeniYas;
            calisanlar[i].departman = yeniDepartman;
            calisanlar[i].maas = yeniMaas;
            console.log(isim + " başarıyla güncellendi.");
            return;
        }
    }
    console.log("Hata: Çalışan bulunamadı.");
}
function calisanSil(isim) {
    for (let i = 0; i < calisanlar.length; i++) {
        if (calisanlar[i].isim === isim) {
            calisanlar.splice(i, 1);
            console.log(isim + " başarıyla silindi.");
            return;
        }
    }

    console.log("Hata: Çalışan bulunamadı.");
}
function calisanlariListele() {
    if (calisanlar.length === 0) {
        console.log("Hiç çalışan yok.");
        return;
    }
    console.log("Çalışanlar:");
    for (let i = 0; i < calisanlar.length; i++) {
        console.log("İsim: " + calisanlar[i].isim + ", Yaş: " + calisanlar[i].yas + ", Departman: " + calisanlar[i].departman + ", Maaş: " + calisanlar[i].maas);
    }
}
calisanEkle("Ahmet", 26, "IT", 7000);
calisanEkle("Mehmet", 35, "HR", 9500);
calisanEkle("Ayşe", 14, "IT", 2000);
calisanEkle("Fatma", 52, "Finance", 3500);
calisanlariListele();
calisanGuncelle("Ahmet", 50, "IT", 1500);
calisanSil("Mehmet");
calisanlariListele();