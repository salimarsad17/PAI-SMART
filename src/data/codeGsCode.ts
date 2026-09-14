/**
 * Google Apps Script Code template for PAI Smart Learning UPT SMPN 2 Rebang Tangkas
 */
export const CODE_GS_CONTENT = `/**
 * =========================================================================================
 * GOOGLE APPS SCRIPT: PAI SMART LEARNING - UPT SMPN 2 REBANG TANGKAS
 * File: Code.gs
 * =========================================================================================
 * 
 * PANDUAN LENGKAP CARA PEMASANGAN & PENGGUNAAN:
 * -----------------------------------------------------------------------------------------
 * 1. Buka Google Drive (https://drive.google.com) dengan akun Google Anda / Sekolah.
 * 2. Buat Google Spreadsheet baru, beri nama: "DATABASE PAI SMART LEARNING - SMPN 2 REBANG TANGKAS".
 * 3. Di menu atas Spreadsheet, klik "Ekstensi" (Extensions) > "Apps Script".
 * 4. Hapus semua kode default di file Code.gs, lalu SALIN & TEMPEL (PASTE) seluruh kode ini.
 * 5. Klik icon Simpan (Save) atau tekan Ctrl + S.
 * 6. Jalankan fungsi awal untuk membuat sheet dan header otomatis:
 *    - Di toolbar atas Apps Script, pilih fungsi "setupSpreadsheet", lalu klik "Jalankan" (Run).
 *    - Google akan meminta "Tinjau Izin" (Review Permissions).
 *    - Klik akun Google Anda > klik "Lanjutan" (Advanced) > klik "Buka ... (tidak aman)".
 *    - Klik "Izinkan" (Allow).
 *    - Selesai! Semua sheet (Siswa, Nilai, Materi, BankSoal, Absensi, Tugas, Pengumuman, Jurnal) otomatis terbuat.
 * 7. DEPLOY SEBAGAI WEB APP:
 *    - Di pojok kanan atas Apps Script, klik tombol "Terapkan" (Deploy) > "Penerapan Baru" (New Deployment).
 *    - Pada icon roda gigi (Select type), pilih "Aplikasi Web" (Web App).
 *    - Isi Deskripsi: "PAI Smart Learning API v1".
 *    - Jalankan sebagai (Execute as): "Saya" (Me - emailanda@gmail.com).
 *    - Yang memiliki akses (Who has access): "Siapa saja" (Anyone). -> WAJIB DIPILIH AGAR BISA DIAKSES!
 *    - Klik "Terapkan" (Deploy).
 *    - Salin "URL Aplikasi Web" yang berakhiran "/exec".
 * 8. Tempelkan URL tersebut di menu "Pengaturan" pada aplikasi PAI Smart Learning Web, lalu klik "Simpan & Uji Koneksi".
 * =========================================================================================
 */

// Konfigurasi Header Tiap Lembar Kerja (Sheet)
var SHEETS_CONFIG = {
  Siswa: [
    'id', 'nis', 'name', 'gender', 'classId', 'avatar',
    'completedMaterialsCount', 'completedExercisesCount', 'averageGrade',
    'attendancePercentage', 'xp', 'level', 'badges', 'phone', 'parentName', 'updatedAt'
  ],
  Nilai: [
    'id', 'studentId', 'studentName', 'gradeLevel', 'examId', 'examTitle',
    'score', 'passingScore', 'status', 'submittedAt'
  ],
  Materi: [
    'id', 'title', 'gradeLevel', 'chapter', 'chapterTitle', 'category',
    'summary', 'fullContent', 'dailyLifeExample', 'videoUrl',
    'estimatedReadingMinutes', 'xpReward', 'updatedAt'
  ],
  BankSoal: [
    'id', 'gradeLevel', 'chapter', 'materialId', 'category', 'type',
    'difficulty', 'questionText', 'options', 'correctAnswer', 'score',
    'explanation', 'matchingPairs', 'updatedAt'
  ],
  Absensi: [
    'id', 'studentId', 'studentName', 'classId', 'date', 'status', 'notes', 'timestamp'
  ],
  Tugas: [
    'id', 'title', 'description', 'gradeLevel', 'category', 'deadline',
    'instructions', 'maxScore', 'status', 'updatedAt'
  ],
  Pengumuman: [
    'id', 'title', 'content', 'date', 'author', 'priority', 'targetRole', 'targetClass'
  ],
  Jurnal: [
    'id', 'date', 'academicYear', 'semester', 'classId', 'subject',
    'topic', 'materialsDiscussed', 'attendedCount', 'absentCount',
    'notes', 'teacherNip', 'teacherName', 'createdAt'
  ]
};

/**
 * Fungsi Setup: Membangun struktur Spreadsheet otomatis dengan styling rapi
 * Jalankan fungsi ini satu kali saat pertama kali setup di Apps Script editor!
 */
function setupSpreadsheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for (var sheetName in SHEETS_CONFIG) {
    var sheet = ss.getSheetByName(sheetName);
    var headers = SHEETS_CONFIG[sheetName];
    
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // Cek apakah baris header sudah ada
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      
      // Styling Header: Warna Hijau Emerald Khas PAI, Teks Putih Tebal, Freeze baris 1
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#047857'); // Emerald-700
      headerRange.setFontColor('#FFFFFF');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
      headerRange.setVerticalAlignment('middle');
      sheet.setRowHeight(1, 36);
      sheet.setFrozenRows(1);
    }
  }

  // Hapus 'Sheet1' default jika masih kosong
  var defaultSheet = ss.getSheetByName('Sheet1') || ss.getSheetByName('Sheet 1');
  if (defaultSheet && ss.getSheets().length > 1 && defaultSheet.getLastRow() === 0) {
    try {
      ss.deleteSheet(defaultSheet);
    } catch (e) {
      // Abaikan jika tidak bisa dihapus
    }
  }

  Logger.log('Setup Spreadsheet Berhasil! Semua lembar kerja dan header telah siap.');
  return 'Setup Spreadsheet Berhasil!';
}

/**
 * Handle HTTP GET Requests
 */
function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : 'ping';
  var data = (e && e.parameter && e.parameter.data) ? JSON.parse(e.parameter.data) : null;
  
  var result = handleApiRequest(action, data, e ? e.parameter : {});
  return createJsonResponse(result);
}

/**
 * Handle HTTP POST Requests
 */
function doPost(e) {
  var action = 'ping';
  var payloadData = null;

  try {
    if (e && e.postData && e.postData.contents) {
      var parsed = JSON.parse(e.postData.contents);
      action = parsed.action || 'ping';
      payloadData = parsed.data || null;
    } else if (e && e.parameter && e.parameter.action) {
      action = e.parameter.action;
      payloadData = e.parameter.data ? JSON.parse(e.parameter.data) : null;
    }
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      message: 'Format payload JSON tidak valid: ' + err.toString()
    });
  }

  var result = handleApiRequest(action, payloadData, e ? e.parameter : {});
  return createJsonResponse(result);
}

/**
 * Routing & Router Logika Utama
 */
function handleApiRequest(action, data, params) {
  try {
    switch (action) {
      // 1. PING / TEST KONEKSI
      case 'ping':
        return {
          status: 'success',
          message: 'Terhubung ke Google Sheets PAI SMART LEARNING UPT SMPN 2 REBANG TANGKAS',
          school: 'UPT SMPN 2 REBANG TANGKAS',
          app: 'PAI Smart Learning',
          timestamp: new Date().toISOString(),
          activeSheets: Object.keys(SHEETS_CONFIG)
        };

      // 2. SETUP SPREADSHEET
      case 'setup':
        setupSpreadsheet();
        return { status: 'success', message: 'Lembar kerja berhasil diinisialisasi!' };

      // 3. SISWA
      case 'getStudents':
        return { status: 'success', data: getSheetData('Siswa') };
      case 'addStudent':
      case 'saveStudent':
      case 'updateStudent':
        return saveOrUpdateRecord('Siswa', 'id', data);
      case 'deleteStudent':
        return deleteRecord('Siswa', 'id', data && data.id ? data.id : (params.id || ''));

      // 4. MATERI
      case 'getMaterials':
        return { status: 'success', data: getSheetData('Materi') };
      case 'addMaterial':
      case 'saveMaterial':
      case 'updateMaterial':
        return saveOrUpdateRecord('Materi', 'id', data);
      case 'deleteMaterial':
        return deleteRecord('Materi', 'id', data && data.id ? data.id : (params.id || ''));

      // 5. BANK SOAL
      case 'getQuestions':
        return { status: 'success', data: getSheetData('BankSoal') };
      case 'addQuestion':
      case 'saveQuestion':
      case 'updateQuestion':
        return saveOrUpdateRecord('BankSoal', 'id', data);
      case 'deleteQuestion':
        return deleteRecord('BankSoal', 'id', data && data.id ? data.id : (params.id || ''));

      // 6. NILAI & ASESMEN
      case 'getGrades':
        return { status: 'success', data: getSheetData('Nilai') };
      case 'saveGrade':
      case 'addGrade':
        return saveOrUpdateRecord('Nilai', 'id', data);

      // 7. ABSENSI
      case 'getAttendance':
        return { status: 'success', data: getSheetData('Absensi') };
      case 'saveAttendance':
        return saveOrUpdateRecord('Absensi', 'id', data);

      // 8. TUGAS
      case 'getAssignments':
        return { status: 'success', data: getSheetData('Tugas') };
      case 'saveAssignment':
        return saveOrUpdateRecord('Tugas', 'id', data);

      // 9. PENGUMUMAN
      case 'getAnnouncements':
        return { status: 'success', data: getSheetData('Pengumuman') };
      case 'saveAnnouncement':
        return saveOrUpdateRecord('Pengumuman', 'id', data);

      // 10. JURNAL MENGAJAR GURU
      case 'getJournals':
        return { status: 'success', data: getSheetData('Jurnal') };
      case 'saveJournal':
        return saveOrUpdateRecord('Jurnal', 'id', data);

      // 11. BULK SYNC / FULL EXPORT
      case 'syncAll':
        return handleBulkSync(data);

      default:
        return {
          status: 'error',
          message: 'Aksi (' + action + ') tidak dikenali oleh Google Apps Script.'
        };
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'Kesalahan server Apps Script: ' + error.toString()
    };
  }
}

/**
 * Ambil lembar kerja berdasarkan nama, buat baru beserta header jika belum ada
 */
function getOrCreateSheet(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  var headers = SHEETS_CONFIG[sheetName] || [];

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    if (headers.length > 0) {
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#047857');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
      sheet.setRowHeight(1, 36);
      sheet.setFrozenRows(1);
    }
  }
  return sheet;
}

/**
 * Membaca seluruh data dari Sheet menjadi Array of Objects
 */
function getSheetData(sheetName) {
  var sheet = getOrCreateSheet(sheetName);
  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn();

  if (lastRow <= 1 || lastCol === 0) {
    return [];
  }

  var range = sheet.getRange(1, 1, lastRow, lastCol);
  var values = range.getValues();
  var headers = values[0];
  var rows = [];

  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var item = {};
    var hasContent = false;

    for (var j = 0; j < headers.length; j++) {
      var headerKey = headers[j];
      var cellValue = row[j];

      if (typeof cellValue === 'string' && (cellValue.indexOf('[') === 0 || cellValue.indexOf('{') === 0)) {
        try {
          cellValue = JSON.parse(cellValue);
        } catch (e) {
          // Keep as string
        }
      }

      if (cellValue !== '' && cellValue !== null && cellValue !== undefined) {
        hasContent = true;
      }
      item[headerKey] = cellValue;
    }

    if (hasContent) {
      rows.push(item);
    }
  }

  return rows;
}

/**
 * Menyimpan data (Insert jika baru, Update jika ID sudah ada)
 */
function saveOrUpdateRecord(sheetName, idField, recordData) {
  if (!recordData) {
    return { status: 'error', message: 'Data yang dikirim kosong.' };
  }

  var sheet = getOrCreateSheet(sheetName);
  var headers = SHEETS_CONFIG[sheetName] || [];
  
  if (!recordData[idField]) {
    recordData[idField] = 'id_' + new Date().getTime();
  }
  if (!recordData.updatedAt && headers.indexOf('updatedAt') !== -1) {
    recordData.updatedAt = new Date().toISOString();
  }

  var lastRow = sheet.getLastRow();
  var targetRowIndex = -1;

  if (lastRow > 1) {
    var idColIndex = headers.indexOf(idField) + 1;
    if (idColIndex > 0) {
      var idValues = sheet.getRange(2, idColIndex, lastRow - 1, 1).getValues();
      for (var r = 0; r < idValues.length; r++) {
        if (String(idValues[r][0]) === String(recordData[idField])) {
          targetRowIndex = r + 2;
          break;
        }
      }
    }
  }

  var rowValues = [];
  for (var c = 0; c < headers.length; c++) {
    var key = headers[c];
    var val = recordData[key];

    if (val === undefined || val === null) {
      val = '';
    } else if (typeof val === 'object') {
      val = JSON.stringify(val);
    }
    rowValues.push(val);
  }

  if (targetRowIndex > 0) {
    sheet.getRange(targetRowIndex, 1, 1, headers.length).setValues([rowValues]);
    return { status: 'success', message: 'Data berhasil diperbarui di lembar ' + sheetName, data: recordData };
  } else {
    sheet.appendRow(rowValues);
    return { status: 'success', message: 'Data baru berhasil ditambahkan ke lembar ' + sheetName, data: recordData };
  }
}

/**
 * Menghapus baris berdasarkan ID
 */
function deleteRecord(sheetName, idField, targetId) {
  if (!targetId) {
    return { status: 'error', message: 'ID target penghapusan tidak disertakan.' };
  }

  var sheet = getOrCreateSheet(sheetName);
  var headers = SHEETS_CONFIG[sheetName] || [];
  var lastRow = sheet.getLastRow();

  if (lastRow <= 1) {
    return { status: 'error', message: 'Lembar kerja kosong.' };
  }

  var idColIndex = headers.indexOf(idField) + 1;
  if (idColIndex <= 0) {
    return { status: 'error', message: 'Kolom ID tidak ditemukan pada konfigurasi header.' };
  }

  var idValues = sheet.getRange(2, idColIndex, lastRow - 1, 1).getValues();
  for (var r = 0; r < idValues.length; r++) {
    if (String(idValues[r][0]) === String(targetId)) {
      sheet.deleteRow(r + 2);
      return { status: 'success', message: 'Data dengan ID ' + targetId + ' berhasil dihapus.' };
    }
  }

  return { status: 'error', message: 'Data dengan ID ' + targetId + ' tidak ditemukan di sheet ' + sheetName };
}

/**
 * Sinkronisasi Massal (Bulk Sync) dari client
 */
function handleBulkSync(bundle) {
  if (!bundle || typeof bundle !== 'object') {
    return { status: 'error', message: 'Format bundle data sync tidak valid.' };
  }

  var counts = {};

  for (var key in bundle) {
    var sheetKey = '';
    if (key === 'students') sheetKey = 'Siswa';
    else if (key === 'materials') sheetKey = 'Materi';
    else if (key === 'questions') sheetKey = 'BankSoal';
    else if (key === 'grades') sheetKey = 'Nilai';
    else if (key === 'attendance') sheetKey = 'Absensi';
    else if (key === 'assignments') sheetKey = 'Tugas';
    else if (key === 'announcements') sheetKey = 'Pengumuman';
    else if (key === 'journals') sheetKey = 'Jurnal';

    if (sheetKey && Array.isArray(bundle[key])) {
      var items = bundle[key];
      for (var i = 0; i < items.length; i++) {
        saveOrUpdateRecord(sheetKey, 'id', items[i]);
      }
      counts[sheetKey] = items.length;
    }
  }

  return {
    status: 'success',
    message: 'Sinkronisasi massal seluruh data berhasil diproses ke Google Sheets.',
    processed: counts
  };
}

/**
 * Format Response JSON dengan Header CORS
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
`;
