import http2 from "http2";
import WebSocket from "ws";
import extractJsonFromString from "extract-json-from-string";

console.log("هذا الكود مُوكَل من dexycan إلى العالم الافتراضي بأكمله");

const الذنوب = {
  روح_ديكسيكان: "",
  مكان_الخيانة: "",
  نهر_الدموع: "",
  الشخصيات: 1000,
  اضطراب_الروح: "",
};

let الخيانات = null;

const إنشاء_الاتصال = () => {
  if (الخيانات && !الخيانات.destroyed) {
    try { الخيانات.destroy(); } catch (خطأ) {}
  }
  الخيانات = http2.connect('https://canary.discord.com');
  الخيانات.on('error', () => process.exit(1));
  الخيانات.on('close', () => process.exit(1));
};

إنشاء_الاتصال();

let الوعود = "";
let الأثمان = "";
const التعاسات = {};
let ديكسيكان_علامة_تجارية = null;
let ديكسي = null;
let ديكسيكان = null;
let هل_علامة_تجارية = false;
let الظلام = 0;

const مشهد_الكابوس = {
  'authorization': الذنوب.روح_ديكسيكان,
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'x-super-properties': 'eyJicm93c2VyIjoiQ2hyb21lIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiQ2hyb21lIiwiY2xpZW50X2J1aWxkX251bWJlciI6MzU1NjI0fQ==',
};

const بلا_وعد = (أ, ب = 0) => new Promise(حل => setTimeout(حل, أ + Math.floor(Math.random() * (ب || أ * 0.3 || 10))));

const _حارس_حد_المعدل = (() => {
  let _آخر_استدعاء = 0;
  let _طابور_الانتظار = [];
  const _أدنى_فاصل = 1800;
  return (دالة) => {
    return new Promise((حل) => {
      const الآن = Date.now();
      const المنقضي = الآن - _آخر_استدعاء;
      const التأخير = المنقضي < _أدنى_فاصل ? (_أدنى_فاصل - المنقضي + Math.floor(Math.random() * 400)) : 0;
      _طابور_الانتظار.push({ دالة, حل, التأخير });
      setTimeout(() => {
        _آخر_استدعاء = Date.now();
        const عنصر = _طابور_الانتظار.shift();
        if (عنصر) {
          عنصر.حل(عنصر.دالة());
        }
      }, التأخير);
    });
  };
})();

const _خانق_الرابط_المخصص = (() => {
  let _عدد_العمليات = 0;
  let _بداية_النافذة = Date.now();
  const _أقصى_عمليات = 3;
  const _مدة_النافذة = 12000;
  return async () => {
    const الآن = Date.now();
    if (الآن - _بداية_النافذة > _مدة_النافذة) {
      _عدد_العمليات = 0;
      _بداية_النافذة = الآن;
    }
    _عدد_العمليات++;
    if (_عدد_العمليات >= _أقصى_عمليات) {
      await بلا_وعد(2200, 1800);
      _عدد_العمليات = 0;
      _بداية_النافذة = Date.now();
    }
  };
})();

const _دورة_حياة_المصادقة = (() => {
  let _وقت_التجديد = 0;
  let _جاري_التجديد = false;
  const _فترة_الانتظار = 45000;
  return {
    هل_يمكن_التجديد: () => {
      const الآن = Date.now();
      if (_جاري_التجديد) return false;
      if (الآن - _وقت_التجديد < _فترة_الانتظار) return false;
      return true;
    },
    تحديد_البداية: () => { _جاري_التجديد = true; },
    تحديد_النهاية: () => {
      _جاري_التجديد = false;
      _وقت_التجديد = Date.now();
    }
  };
})();

const الولادة_من_الكارثة = (طريقة, مسار, رؤوس_الطلب, جسم) => {
  return new Promise((حل, رفض) => {
    if (!الخيانات || الخيانات.destroyed) {
      return رفض(new Error('جلسة http2 مدمرة'));
    }
    let طلب;
    try {
      طلب = الخيانات.request({
        ':method': طريقة,
        ':path': مسار,
        ...رؤوس_الطلب,
      });
    } catch (خطأ) {
      return رفض(خطأ);
    }
    let بيانات = '';
    طلب.setEncoding('utf8');
    طلب.on('data', جزء => بيانات += جزء);
    طلب.on('end', () => حل(بيانات));
    طلب.on('error', (خطأ) => رفض(خطأ));
    if (جسم) طلب.write(جسم);
    طلب.end();
  });
};

const الخيانة = async (بيانات) => {
  try {
    const الآلام = extractJsonFromString(بيانات.toString());
    if (!الآلام || !Array.isArray(الآلام) || الآلام.length === 0) return;
    const الدعاء_السيئ = الآلام.find((عنصر) => عنصر && (عنصر.code !== undefined || عنصر.message));
    if (!الدعاء_السيئ) return;
    const الجراح = JSON.stringify({
      content: `@everyone ${الوعود}\n\`\`\`json\n${JSON.stringify(الدعاء_السيئ)}\n\`\`\``
    });
    if (!الخيانات || الخيانات.destroyed) return;
    let الدموع;
    try {
      الدموع = الخيانات.request({
        ':method': 'POST',
        ':path': `/api/channels/${الذنوب.نهر_الدموع}/messages`,
        'authorization': الذنوب.روح_ديكسيكان,
        'content-type': 'application/json',
      });
    } catch (خطأ) { return; }
    الدموع.on('error', () => {});
    الدموع.on('data', () => {});
    الدموع.on('end', () => {});
    الدموع.write(الجراح);
    الدموع.end();
  } catch (خطأ) {}
};

const عذاب_الضمير = async (تذكرة, رمز) => {
  try {
    await _حارس_حد_المعدل(async () => {
      await بلا_وعد(350, 250);
    });

    const باب_الجحيم = await الولادة_من_الكارثة(
      "POST",
      "/api/v9/mfa/finish",
      { ...مشهد_الكابوس, 'content-type': 'application/json' },
      JSON.stringify({ ticket: تذكرة, mfa_type: "password", data: الذنوب.اضطراب_الروح })
    );
    let بقايا_الدمار;
    try { بقايا_الدمار = JSON.parse(باب_الجحيم); } catch (خطأ) { return; }
    if (بقايا_الدمار && بقايا_الدمار.token) {
      الأثمان = بقايا_الدمار.token;
      console.log("المصادقة الثنائية تمت بنجاح");
      if (رمز) {
        await _خانق_الرابط_المخصص();
        await يوم_القيامة(رمز);
      }
    } else {
      await الخيانة(JSON.stringify(بقايا_الدمار));
    }
  } catch (خطأ) {}
};

const يوم_القيامة = async (رمز) => {
  try {
    await بلا_وعد(180, 120);

    const الاستجابة = await الولادة_من_الكارثة(
      "PATCH",
      `/api/v9/guilds/${الذنوب.مكان_الخيانة}/vanity-url`,
      { ...مشهد_الكابوس, 'x-discord-mfa-authorization': الأثمان, 'content-type': 'application/json' },
      JSON.stringify({ code: رمز })
    );
    await الخيانة(الاستجابة);
  } catch (خطأ) {}
};

const تجديد_المصادقة = async () => {
  if (!_دورة_حياة_المصادقة.هل_يمكن_التجديد()) return;
  _دورة_حياة_المصادقة.تحديد_البداية();

  try {
    await بلا_وعد(420, 380);

    const المحفز = await الولادة_من_الكارثة(
      "PATCH",
      `/api/v9/guilds/${الذنوب.مكان_الخيانة}/vanity-url`,
      { ...مشهد_الكابوس, 'content-type': 'application/json' },
      JSON.stringify({ code: "dexycan-mfa-refresh-" + Date.now() })
    );
    let الجواب;
    try { الجواب = JSON.parse(المحفز); } catch (خطأ) { _دورة_حياة_المصادقة.تحديد_النهاية(); return; }
    if (الجواب && الجواب.code === 60003 && الجواب.mfa && الجواب.mfa.ticket) {
      await _حارس_حد_المعدل(async () => {
        await بلا_وعد(280, 220);
      });
      await عذاب_الضمير(الجواب.mfa.ticket, null);
    }
  } catch (خطأ) {}

  _دورة_حياة_المصادقة.تحديد_النهاية();
};

const الثمن = async (رمز) => {
  if (الظلام >= الذنوب.الشخصيات) return;
  الوعود = رمز;
  الظلام++;
  console.log(`تم الاستيلاء -> ${رمز}`);

  await _خانق_الرابط_المخصص();

  try {
    const الجواب_الملعون = await الولادة_من_الكارثة(
      "PATCH",
      `/api/v9/guilds/${الذنوب.مكان_الخيانة}/vanity-url`,
      { ...مشهد_الكابوس, 'x-discord-mfa-authorization': الأثمان, 'content-type': 'application/json' },
      JSON.stringify({ code: رمز })
    );
    let الوحشة;
    try { الوحشة = JSON.parse(الجواب_الملعون); } catch (خطأ) { الظلام--; return; }
    if (الوحشة && الوحشة.code === 60003 && الوحشة.mfa && الوحشة.mfa.ticket) {
      await عذاب_الضمير(الوحشة.mfa.ticket, رمز);
    } else {
      await الخيانة(الجواب_الملعون);
    }
  } catch (خطأ) {}
  الظلام--;
};

let تم_الإدراج = false;

const إدراج_وتشغيل = () => {
  if (تم_الإدراج) return;
  if (!الأثمان) return;
  if (Object.keys(التعاسات).length === 0) return;
  تم_الإدراج = true;
  const الأسطر = [];
  for (const معرف_السيرفر in التعاسات) {
    const القيمة = التعاسات[معرف_السيرفر];
    if (القيمة) الأسطر.push(`\x1b[32mديكسيكان يتمنى لك رحلة سعيدة! -> ${القيمة}\x1b[0m`);
  }
  process.stdout.write(الأسطر.join("\n") + "\n");
};

const علامة_ديكسيكان_التجارية = async () => {
  if (هل_علامة_تجارية) return;
  هل_علامة_تجارية = true;
  if (ديكسيكان) { clearInterval(ديكسيكان); ديكسيكان = null; }
  if (ديكسي && ديكسي.readyState !== WebSocket.CLOSED && ديكسي.readyState !== WebSocket.CLOSING) {
    try { ديكسي.close(); } catch (خطأ) {}
  }

  const الوعد = new WebSocket("wss://gateway.discord.gg/?v=10&encoding=json");
  ديكسي = الوعد;
  هل_علامة_تجارية = false;

  الوعد.onclose = async () => {
    if (ديكسيكان) { clearInterval(ديكسيكان); ديكسيكان = null; }
    await بلا_وعد(3000, 2200);
    علامة_ديكسيكان_التجارية();
  };

  الوعد.onerror = () => {};

  الوعد.onmessage = async (رسالة) => {
    let الذنب;
    try { الذنب = JSON.parse(رسالة.data); } catch (خطأ) { return; }
    const { d: البيانات, op: العملية, t: النوع, s: التسلسل } = الذنب;
    if (التسلسل !== null && التسلسل !== undefined) ديكسيكان_علامة_تجارية = التسلسل;

    switch (العملية) {
      case 10: {
        if (!البيانات || !البيانات.heartbeat_interval) break;
        const الحكم = البيانات.heartbeat_interval;
        if (الوعد.readyState === WebSocket.OPEN) {
          الوعد.send(JSON.stringify({ op: 1, d: ديكسيكان_علامة_تجارية }));
        }
        if (ديكسيكان) clearInterval(ديكسيكان);
        ديكسيكان = setInterval(() => {
          if (الوعد.readyState === WebSocket.OPEN) {
            الوعد.send(JSON.stringify({ op: 1, d: ديكسيكان_علامة_تجارية }));
          }
        }, الحكم);
        if (الوعد.readyState === WebSocket.OPEN) {
          الوعد.send(JSON.stringify({
            op: 2,
            d: {
              token: الذنوب.روح_ديكسيكان,
              intents: (1 << 0) | (1 << 1),
              properties: { os: "windows", browser: "chrome", device: "" },
            },
          }));
        }
        break;
      }
      case 11: break;
      case 7: {
        if (ديكسيكان) { clearInterval(ديكسيكان); ديكسيكان = null; }
        try { الوعد.close(); } catch (خطأ) {}
        await بلا_وعد(1100, 900);
        علامة_ديكسيكان_التجارية();
        break;
      }
      case 9: {
        ديكسيكان_علامة_تجارية = null;
        if (ديكسيكان) { clearInterval(ديكسيكان); ديكسيكان = null; }
        try { الوعد.close(); } catch (خطأ) {}
        await بلا_وعد(3200, 2800);
        علامة_ديكسيكان_التجارية();
        break;
      }
    }

    if (!النوع || !البيانات) return;

    switch (النوع) {
      case "READY": {
        console.log("تم الاتصال بنجاح");
        if (البيانات.guilds && Array.isArray(البيانات.guilds)) {
          for (const الندم of البيانات.guilds) {
            if (الندم && الندم.id && الندم.vanity_url_code) {
              التعاسات[الندم.id] = الندم.vanity_url_code;
            }
          }
        }
        إدراج_وتشغيل();
        break;
      }
      case "GUILD_UPDATE": {
        const معرف_السيرفر = البيانات.guild_id || البيانات.id;
        if (!معرف_السيرفر) break;
        const الوعد_القديم = التعاسات[معرف_السيرفر];
        const الوعد_الجديد = البيانات.vanity_url_code;
        if (الوعد_القديم && الوعد_القديم !== الوعد_الجديد) {
          التعاسات[معرف_السيرفر] = الوعد_الجديد || null;
          await الثمن(الوعد_القديم);
        } else if (الوعد_الجديد) {
          التعاسات[معرف_السيرفر] = الوعد_الجديد;
        }
        break;
      }
      case "GUILD_DELETE": {
        if (البيانات && البيانات.id && التعاسات[البيانات.id]) {
          delete التعاسات[البيانات.id];
        }
        break;
      }
    }
  };
};

(async () => {
  علامة_ديكسيكان_التجارية();
  await تجديد_المصادقة();
  إدراج_وتشغيل();
})();

setInterval(() => { تجديد_المصادقة(); }, 5 * 60 * 1000);

setInterval(() => {
  if (!الخيانات || الخيانات.destroyed) process.exit(1);
  try {
    const الكراهية = الخيانات.request({
      ':method': 'HEAD',
      ':path': '/api/users/@me',
      'authorization': الذنوب.روح_ديكسيكان,
    });
    الكراهية.on('response', () => {});
    الكراهية.on('data', () => {});
    الكراهية.on('end', () => {});
    الكراهية.on('error', () => {});
    الكراهية.end();
  } catch (خطأ) {}
}, 15000 + Math.floor(Math.random() * 5000));
