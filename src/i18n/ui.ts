export type Locale = 'he' | 'ar' | 'en';

export const locales: Locale[] = ['he', 'ar', 'en'];

export const localeLabels: Record<Locale, string> = {
  he: 'עברית',
  ar: 'العربية',
  en: 'English',
};

export const localeShortLabels: Record<Locale, string> = {
  he: 'HE',
  ar: 'AR',
  en: 'EN',
};

export const rtlLocales: Locale[] = ['he', 'ar'];

export function getDir(locale: Locale): 'rtl' | 'ltr' {
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}

export function getLocalePath(locale: Locale): string {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  if (locale === 'he') return base;
  return `${base}${locale}/`;
}

export interface PricingTier {
  id: 'basic' | 'standard' | 'premium';
  name: string;
  price: string;
  annualPrice: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface MockupNavItem {
  label: string;
  active?: boolean;
}

export interface Messages {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    pricing: string;
    contact: string;
    login: string;
    cta: string;
    ctaShort: string;
    menu: string;
    language: string;
  };
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    proof: string;
    mockupUrl: string;
    mockupNavLabel: string;
    mockupNav: MockupNavItem[];
    mockupTitle: string;
    mockupSubtitle: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  featuresShowcase?: {
    headline: string;
    subheadline: string;
    navLabel: string;
    tipLabel: string;
    mockupUrl: string;
    assistantName: string;
    online: string;
    typeMessage: string;
    demoClient: string;
    demoClientInitials: string;
    demoClientSince: string;
    demoAppointments: string;
    whatsapp: {
      title: string;
      description: string;
    };
    calendar?: {
      title: string;
      description: string;
    };
    crm: {
      title: string;
      description: string;
      clientsTitle: string;
      clientsCount: string;
      addButton: string;
      appointments: string;
      stats: {
        active: string;
        pending: string;
        retention: string;
      };
    };
    documents: {
      title: string;
      subtitle: string;
      generate: string;
      clientFiles: string;
      files: string;
      summary: string;
      new: string;
      treatmentPlan: string;
      updated: string;
      medicalHistory: string;
      created: string;
      invoice: string;
      paid: string;
      visitDate: string;
      invoiceDate: string;
      receipt: string;
      receiptDate: string;
      prescription: string;
      rxDate: string;
      aiLabel: string;
      aiDesc: string;
    };
      ai: {
        title: string;
        description?: string;
        status: string;
        badge: string;
        greeting: string;
        userQuery: string;
        response: string;
        inputPlaceholder: string;
        suggestion1: string;
        suggestion2: string;
        suggestion3: string;
        pending: string;
      };
      reports?: {
        title: string;
        description: string;
      };
      whatsappMessages: {
        sent: string[];
        received: string[];
      };
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    perMonth: string;
    billing: {
      monthly: string;
      annual: string;
      save: string;
      savePerYear: string;
    };
    tiers: PricingTier[];
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
  };
  contactForm: {
    heading: string;
    subheading: string;
    businessNamePlaceholder: string;
    businessCategoryLabel: string;
    businessCategoryDefault: string;
    businessCategoryOptions: { value: string; label: string }[];
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    gmailPlaceholder: string;
    gmailHint: string;
    messagePlaceholder: string;
    whatsappStatusLabel: string;
    whatsappStatusDefault: string;
    whatsappStatusOptions: { value: string; label: string }[];
    submit: string;
    successTitle: string;
    successMessage: string;
    orDivider: string;
    startNow: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  whatsappPrefill: string;
}

export const messages: Record<Locale, Messages> = {
  he: {
    meta: {
      title: 'Dayli — CRM חכם לעסקים',
      description:
        'Dayli מאחדת יומן, לקוחות, מסמכים ותזכורות WhatsApp במקום אחד — עם סוכן AI שעובד עבורך 24/7.',
    },
    nav: {
      features: 'תכונות',
      pricing: 'מחירים',
      contact: 'צור קשר',
      login: 'כניסה',
      cta: 'התחל עכשיו',
      ctaShort: 'התחל',
      menu: 'תפריט',
      language: 'שפה',
    },
    hero: {
      badge: 'מערכת CRM חכמה לעסקים',
      headlineLine1: 'נהל את העסק שלך',
      headlineLine2: 'ביום אחד',
      subheadline:
        'Dayli מאחדת יומן, לקוחות, מסמכים ותזכורות WhatsApp במקום אחד — עם סוכן AI שעובד עבורך 24/7.',
      primaryCta: 'התחל ניסיון חינם',
      secondaryCta: 'צפה בהדגמה',
      proof: 'ללא כרטיס אשראי · התקנה ב-2 דקות',
      mockupUrl: 'app.dayli.io',
      mockupNavLabel: 'תכונות',
      mockupNav: [
        { label: 'יומן ותורים חכם', active: true },
        { label: 'תזכורות WhatsApp' },
        { label: 'מאגר לקוחות CRM' },
        { label: 'מסמכים ו-PDF' },
        { label: 'סוכן AI 24/7' },
      ],
      mockupTitle: 'יומן ותורים חכם',
      mockupSubtitle: 'כל מה שצריך',
    },
    features: {
      eyebrow: 'כל מה שצריך',
      title: 'פחות כלים. יותר לקוחות.',
      subtitle: 'הכל בנוי סביב היום שלך — מהפגישה הראשונה ועד החשבונית האחרונה.',
      items: [
        {
          title: 'יומן ותורים חכם',
          description: 'ניהול תורים מסונכרן, תזכורות אוטומטיות וזמינות בזמן אמת.',
        },
        {
          title: 'תזכורות WhatsApp',
          description: 'שלח אישורי הגעה ומעקבים ישירות לוואטסאפ של הלקוח.',
        },
        {
          title: 'מאגר לקוחות CRM',
          description: 'כל פרט על כל לקוח — היסטוריה, מסמכים והערות במקום אחד.',
        },
        {
          title: 'מסמכים ו-PDF',
          description: 'הפק הצעות מחיר, חשבוניות וקבלות עם תבניות מותאמות אישית.',
        },
        {
          title: 'סוכן AI 24/7',
          description: 'מענה מיידי ללידים, תיאום פגישות וסינון פניות ללא הפסקה.',
        },
        {
          title: 'אוטומציות מתקדמות',
          description: 'תהליכי עבודה חכמים שחוסכים שעות עבודה בכל שבוע.',
        },
      ],
    },
    featuresShowcase: {
      headline: 'כלים שעובדים בשבילך',
      subheadline: 'תכונות מתקדמות לניהול חכם של העסק',
      navLabel: 'תכונות',
      tipLabel: 'טיפ',
      mockupUrl: 'app.dayli.io',
      assistantName: 'עוזר Dayli',
      online: 'מקוון',
      typeMessage: 'הקלד הודעה...',
      demoClient: 'שרה ג׳ונסון',
      demoClientInitials: 'שג',
      demoClientSince: 'לקוחה מאז 2022',
      demoAppointments: '12 תורים',
      whatsapp: {
        title: 'תזכורות WhatsApp',
        description: 'שליחת תזכורות אוטומטיות ללקוחות דרך וואטסאפ'
      },
      calendar: {
        title: 'לו״ז',
        description: 'ניהול לוח הזמנים והפגישות שלך בקלות'
      },
      crm: {
        title: 'מאגר לקוחות',
        description: 'ניהול מערכות יחסים והיסטוריית לקוחות',
        clientsTitle: 'לקוחות',
        clientsCount: 'לקוחות בסך הכל',
        addButton: 'הוסף לקוח',
        appointments: 'תורים',
        stats: {
          active: 'פעילים',
          pending: 'ממתינים',
          retention: 'שימור'
        }
      },
      documents: {
        title: 'מסמכים ו-PDF',
        subtitle: 'מסמכים שנוצרים אוטומטית',
        generate: 'חדש',
        clientFiles: 'קבצי לקוח',
        files: 'קבצים',
        summary: 'סיכום ביקור',
        new: 'חדש',
        treatmentPlan: 'תוכנית טיפול',
        updated: 'עודכן',
        medicalHistory: 'היסטוריה רפואית',
        created: 'נוצר',
        invoice: 'חשבונית #INV-2026-06',
        paid: 'שולם',
        visitDate: 'ביקור: 15 יוני 2026',
        invoiceDate: '15 יוני 2026',
        receipt: 'קבלה',
        receiptDate: '15 יוני 2026',
        prescription: 'מרשם',
        rxDate: '15 יוני 2026',
        aiLabel: 'עוזר מסמכים AI',
        aiDesc: 'מייצר אוטומטית סיכומי ביקור, חשבוניות ומרשמים'
      },
      ai: {
        title: 'סוכן AI',
        description: 'עוזר AI זמין 24/7 עבור העסק שלך',
        status: 'זמין 24/7',
        badge: 'בטא',
        greeting: 'שלום! אני עוזר ה-AI של Dayli. אני יכול לעזור לך עם תזמון, ניהול לקוחות ועוד. במה אוכל לסייע?',
        userQuery: 'הצג לי את התורים של מחר',
        response: 'יש לך 4 תורים מחר:',
        inputPlaceholder: 'שאל אותי כל דבר...',
        suggestion1: 'קבע תור חדש',
        suggestion2: 'שלח תזכורות',
        suggestion3: 'סטטיסטיקות לקוחות',
        pending: 'ממתין לאישור'
      },
      reports: {
        title: 'דוחות לקוחות',
        description: 'יצירה ושליחה של דוחות מקצועיים ללקוחות בלחיצה אחת'
      },
      whatsappMessages: {
        sent: [
          'הי שרה, תזכורת לגבי התור שלך מחר בשעה 14:00',
          'מעולה! נתראה מחר במרכז העיר',
          'התור שלך אושר לשעה 15:00 ביום חמישי'
        ],
        received: [
          'תודה על התזכורת! אני אהיה שם',
          'מעולה, תודה!',
          'אושר! מחכה לזה'
        ]
      }
    },
    pricing: {
      eyebrow: 'תמחור',
      title: 'בחר את החבילה שמתאימה לך',
      subtitle: 'מחירים שקופים. ללא הפתעות. בטל בכל רגע.',
      perMonth: 'חודש',
      billing: {
        monthly: 'חודשי',
        annual: 'שנתי',
        save: 'חסכון 21%',
        savePerYear: 'חסכת {amount} בשנה',
      },
      tiers: [
        {
          id: 'basic',
          name: 'Basic',
          price: '₪99',
          annualPrice: '₪78',
          period: 'חודש',
          description: 'לעסק עצמאי',
          cta: 'התחל עכשיו',
          features: [
            'ניהול יומן ותורים',
            'דוחות וסטטיסטיקות בסיסיים',
            'תזכורות תורים ב-WhatsApp',
            'תבנית הודעת תזכורת קבועה',
            'גישה מלאה מהנייד',
            'משתמש אחד · יומן אחד',
            'עד 150 הודעות תזכורת בחודש',
            'תמיכה במייל',
          ],
        },
        {
          id: 'standard',
          name: 'Standard',
          price: '₪249',
          annualPrice: '₪197',
          period: 'חודש',
          description: 'לעסק צומח עם צוות',
          highlighted: true,
          badge: 'הכי פופולרי',
          cta: 'התחל עכשיו',
          features: [
            'כל מה שב-Basic, ובנוסף:',
            'חיבור WhatsApp מתקדם',
            'תבניות הודעות מותאמות אישית',
            'תזכורות ומעקבים אוטומטיים',
            'מאגר לקוחות (CRM)',
            'יצירת מסמכים והפקת PDF',
            'עד 3 תבניות מסמכים · 100 PDF/חודש',
            'עד 3 משתמשים · 2 יומנים',
            'תמיכה בעדיפות גבוהה',
          ],
        },
        {
          id: 'premium',
          name: 'Premium',
          price: '₪449',
          annualPrice: '₪355',
          period: 'חודש',
          description: 'לעסק שרוצה אוטומציה ו-AI',
          cta: 'שדרג ל-Premium',
          features: [
            'כל מה שב-Standard, ובנוסף:',
            'סוכן AI למענה אוטומטי 24/7',
            'סינון וניהול לידים אוטומטי',
            'מעקב אוטומטי אחר לקוחות ולידים',
            'מענה מיידי לפניות חדשות',
            'תיאום פגישות אוטומטי',
            'בסיס ידע מותאם אישית ל-AI',
            'PDF ללא הגבלה · 5+ תבניות',
            '4+ משתמשים · 3+ יומנים',
            'תמיכה מועדפת 24/7',
          ],
        },
      ],
    },
    cta: {
      title: 'מוכן להחזיר לעצמך את היום?',
      subtitle: 'הצטרף לעסקים שכבר חוסכים שעות בשבוע עם Dayli.',
      primary: 'התחל ניסיון חינם',
    },
    contactForm: {
      heading: 'צור איתנו קשר',
      subheading: 'נחזור אליך תוך יום עסקים.',
      businessNamePlaceholder: 'שם העסק',
      businessCategoryLabel: 'קטגוריית עסק',
      businessCategoryDefault: 'בחר קטגוריה',
      businessCategoryOptions: [
        { value: 'clinic', label: 'קליניקה / מרפאה' },
        { value: 'salon', label: 'סלון יופי / ספא' },
        { value: 'lessons', label: 'שיעורים פרטיים' },
        { value: 'realestate', label: 'נדל"ן' },
        { value: 'other', label: 'אחר' },
      ],
      namePlaceholder: 'שם מלא',
      phonePlaceholder: 'מספר טלפון',
      emailPlaceholder: 'כתובת אימייל',
      gmailPlaceholder: 'Gmail (אופציונלי)',
      gmailHint: 'לצורך חיבור WhatsApp API ו-Meta Business',
      messagePlaceholder: 'איך נוכל לעזור? (אופציונלי)',
      whatsappStatusLabel: 'סוג ה-WhatsApp שלך',
      whatsappStatusDefault: 'בחר את סוג ה-WhatsApp שלך',
      whatsappStatusOptions: [
        { value: 'regular', label: 'WhatsApp רגיל בלבד' },
        { value: 'business_app', label: 'WhatsApp Business — האפליקציה החינמית' },
        { value: 'api_verified', label: 'WhatsApp API — חשבון מאומת דרך Meta' },
        { value: 'unsure', label: 'לא בטוח/ה — אשמח לעזרה' },
      ],
      submit: 'שלח פנייה',
      successTitle: 'הפנייה התקבלה!',
      successMessage: 'תודה שפנית אלינו — נחזור אליך בהקדם.',
      orDivider: 'או',
      startNow: 'התחל מיד',
    },
    footer: {
      tagline: '— מערכת CRM חכמה לעסקים בישראל',
      rights: '© 2026 Dayli. כל הזכויות שמורות.',
    },
    whatsappPrefill: 'שלום, אני מעוניין/ת לשמוע על Dayli',
  },
  ar: {
    meta: {
      title: 'Dayli — CRM ذكي للأعمال',
      description:
        'Dayli يوحد التقويم والعملاء والمستندات وتذكيرات WhatsApp في مكان واحد — مع وكيل AI يعمل لك 24/7.',
    },
    nav: {
      features: 'الميزات',
      pricing: 'الأسعار',
      contact: 'تواصل معنا',
      login: 'تسجيل الدخول',
      cta: 'ابدأ الآن',
      ctaShort: 'ابدأ',
      menu: 'القائمة',
      language: 'اللغة',
    },
    hero: {
      badge: 'نظام CRM ذكي للأعمال',
      headlineLine1: 'أدر عملك',
      headlineLine2: 'في يوم واحد',
      subheadline:
        'Dayli يوحد التقويم والعملاء والمستندات وتذكيرات WhatsApp في مكان واحد — مع وكيل AI يعمل لك 24/7.',
      primaryCta: 'ابدأ تجربة مجانية',
      secondaryCta: 'شاهد العرض',
      proof: 'بدون بطاقة ائتمان · إعداد في دقيقتين',
      mockupUrl: 'app.dayli.io',
      mockupNavLabel: 'الميزات',
      mockupNav: [
        { label: 'تقويم ومواعيد ذكي', active: true },
        { label: 'تذكيرات WhatsApp' },
        { label: 'قاعدة عملاء CRM' },
        { label: 'مستندات وPDF' },
        { label: 'وكيل AI 24/7' },
      ],
      mockupTitle: 'تقويم ومواعيد ذكي',
      mockupSubtitle: 'كل ما تحتاجه',
    },
    features: {
      eyebrow: 'كل ما تحتاجه',
      title: 'أدوات أقل. عملاء أكثر.',
      subtitle: 'كل شيء مبني حول يومك — من أول موعد حتى آخر فاتورة.',
      items: [
        {
          title: 'تقويم ومواعيد ذكي',
          description: 'إدارة مواعيد متزامنة، تذكيرات تلقائية وتوفر فوري.',
        },
        {
          title: 'تذكيرات WhatsApp',
          description: 'أرسل تأكيدات الحضور والمتابعات مباشرة إلى واتساب العميل.',
        },
        {
          title: 'قاعدة عملاء CRM',
          description: 'كل تفصيل عن كل عميل — سجل، مستندات وملاحظات في مكان واحد.',
        },
        {
          title: 'مستندات وPDF',
          description: 'أنشئ عروض أسعار وفواتير وإيصالات بقوالب مخصصة.',
        },
        {
          title: 'وكيل AI 24/7',
          description: 'رد فوري على العملاء المحتملين، جدولة المواعيد وتصفية الاستفسارات.',
        },
        {
          title: 'أتمتة متقدمة',
          description: 'سير عمل ذكي يوفر ساعات من العمل كل أسبوع.',
        },
      ],
    },
    featuresShowcase: {
      headline: 'أدوات تعمل من أجلك',
      subheadline: 'ميزات متقدمة لإدارة أعمالك بذكاء',
      navLabel: 'الميزات',
      tipLabel: 'نصيحة',
      mockupUrl: 'app.dayli.io',
      assistantName: 'مساعد Dayli',
      online: 'متصل',
      typeMessage: 'اكتب رسالة...',
      demoClient: 'سارة جونسون',
      demoClientInitials: 'سج',
      demoClientSince: 'عميلة منذ 2022',
      demoAppointments: '12 موعد',
      whatsapp: {
        title: 'تذكيرات WhatsApp',
        description: 'إرسال تذكيرات تلقائية للعملاء عبر واتساب'
      },
      calendar: {
        title: 'التقويم الذكي',
        description: 'إدارة جدولك ومواعيدك بسهولة'
      },
      crm: {
        title: 'قاعدة العملاء',
        description: 'إدارة علاقات العملاء وسجلهم',
        clientsTitle: 'العملاء',
        clientsCount: 'إجمالي العملاء',
        addButton: 'إضافة عميل',
        appointments: 'مواعيد',
        stats: {
          active: 'نشط',
          pending: 'معلق',
          retention: 'الاحتفاظ'
        }
      },
      documents: {
        title: 'المستندات وPDF',
        subtitle: 'مستندات يتم إنشاؤها تلقائياً',
        generate: 'جديد',
        clientFiles: 'ملفات العميل',
        files: 'ملفات',
        summary: 'ملخص الزيارة',
        new: 'جديد',
        treatmentPlan: 'خطة العلاج',
        updated: 'تم التحديث',
        medicalHistory: 'التاريخ الطبي',
        created: 'تم الإنشاء',
        invoice: 'فاتورة #INV-2026-06',
        paid: 'مدفوع',
        visitDate: 'الزيارة: 15 يونيو 2026',
        invoiceDate: '15 يونيو 2026',
        receipt: 'إيصال',
        receiptDate: '15 يونيو 2026',
        prescription: 'وصفة طبية',
        rxDate: '15 يونيو 2026',
        aiLabel: 'مساعد المستندات AI',
        aiDesc: 'ينشئ تلقائياً ملخصات الزيارات والفواتير والوصفات'
      },
      ai: {
        title: 'وكيل AI',
        description: 'مساعد AI متاح 24/7 لأعمالك',
        status: 'متاح 24/7',
        badge: 'بيتا',
        greeting: 'مرحباً! أنا مساعد Dayli الذكي. يمكنني مساعدتك في الجدولة، إدارة العملاء والمزيد. كيف يمكنني المساعدة؟',
        userQuery: 'أرني مواعيد الغد',
        response: 'لديك 4 مواعيد غداً:',
        inputPlaceholder: 'اسألني أي شيء...',
        suggestion1: 'جدولة موعد جديد',
        suggestion2: 'إرسال تذكيرات',
        suggestion3: 'إحصائيات العملاء',
        pending: 'بانتظار التأكيد'
      },
      reports: {
        title: 'تقارير العملاء',
        description: 'إنشاء وإرسال تقارير احترافية للعملاء بنقرة واحدة'
      },
      whatsappMessages: {
        sent: [
          'مرحباً سارة، تذكير بموعدك غداً في الساعة 2:00 ظهراً',
          'ممتاز! أراك غداً في موقع وسط المدينة',
          'تم تأكيد موعدك للساعة 3:00 ظهراً يوم الخميس'
        ],
        received: [
          'شكراً على التذكير! سأكون هناك',
          'رائع، شكراً!',
          'تم التأكيد! أتطلع لذلك'
        ]
      }
    },
    pricing: {
      eyebrow: 'التسعير',
      title: 'اختر الباقة المناسبة لك',
      subtitle: 'أسعار شفافة. بدون مفاجآت. إلغاء في أي وقت.',
      perMonth: 'شهر',
      billing: {
        monthly: 'شهري',
        annual: 'سنوي',
        save: 'وفّر 21%',
        savePerYear: 'وفّرت {amount} سنوياً',
      },
      tiers: [
        {
          id: 'basic',
          name: 'Basic',
          price: '₪99',
          annualPrice: '₪78',
          period: 'شهر',
          description: 'للعمل المستقل',
          cta: 'ابدأ الآن',
          features: [
            'إدارة التقويم والمواعيد',
            'تقارير وإحصائيات أساسية',
            'تذكيرات مواعيد عبر WhatsApp',
            'قالب رسالة تذكير ثابت',
            'وصول كامل من الجوال',
            'مستخدم واحد · تقويم واحد',
            'حتى 150 رسالة تذكير شهرياً',
            'دعم بالبريد',
          ],
        },
        {
          id: 'standard',
          name: 'Standard',
          price: '₪249',
          annualPrice: '₪197',
          period: 'شهر',
          description: 'لعمل متنامٍ مع فريق',
          highlighted: true,
          badge: 'الأكثر شعبية',
          cta: 'ابدأ الآن',
          features: [
            'كل ما في Basic، بالإضافة إلى:',
            'تكامل WhatsApp متقدم',
            'قوالب رسائل مخصصة',
            'تذكيرات ومتابعات تلقائية',
            'قاعدة عملاء (CRM)',
            'إنشاء مستندات وتصدير PDF',
            'حتى 3 قوالب · 100 PDF/شهر',
            'حتى 3 مستخدمين · 2 تقاويم',
            'دعم ذو أولوية',
          ],
        },
        {
          id: 'premium',
          name: 'Premium',
          price: '₪449',
          annualPrice: '₪355',
          period: 'شهر',
          description: 'لعمل يريد الأتمتة والAI',
          cta: 'ترقية إلى Premium',
          features: [
            'كل ما في Standard، بالإضافة إلى:',
            'وكيل AI للرد التلقائي 24/7',
            'تصفية وإدارة leads تلقائية',
            'متابعة تلقائية للعملاء والleads',
            'رد فوري على الاستفسارات الجديدة',
            'جدولة مواعيد تلقائية',
            'قاعدة معرفة مخصصة للAI',
            'PDF بلا حدود · 5+ قوالب',
            '4+ مستخدمين · 3+ تقاويم',
            'دعم مفضل 24/7',
          ],
        },
      ],
    },
    cta: {
      title: 'مستعد لاستعادة يومك؟',
      subtitle: 'انضم للأعمال التي توفر ساعات أسبوعياً مع Dayli.',
      primary: 'ابدأ تجربة مجانية',
    },
    contactForm: {
      heading: 'تواصل معنا',
      subheading: 'سنرد عليك خلال يوم عمل.',
      businessNamePlaceholder: 'اسم النشاط التجاري',
      businessCategoryLabel: 'فئة النشاط التجاري',
      businessCategoryDefault: 'اختر الفئة',
      businessCategoryOptions: [
        { value: 'clinic', label: 'عيادة / مركز طبي' },
        { value: 'salon', label: 'صالون تجميل / سبا' },
        { value: 'lessons', label: 'دروس خصوصية' },
        { value: 'realestate', label: 'عقارات' },
        { value: 'other', label: 'أخرى' },
      ],
      namePlaceholder: 'الاسم الكامل',
      phonePlaceholder: 'رقم الهاتف',
      emailPlaceholder: 'البريد الإلكتروني',
      gmailPlaceholder: 'Gmail (اختياري)',
      gmailHint: 'لربط واتساب API وحساب Meta Business',
      messagePlaceholder: 'كيف يمكننا مساعدتك؟ (اختياري)',
      whatsappStatusLabel: 'نوع واتساب لديك',
      whatsappStatusDefault: 'اختر نوع واتساب',
      whatsappStatusOptions: [
        { value: 'regular', label: 'واتساب عادي فقط' },
        { value: 'business_app', label: 'واتساب Business — التطبيق المجاني' },
        { value: 'api_verified', label: 'واتساب API — حساب موثق عبر Meta' },
        { value: 'unsure', label: 'لست متأكداً — أحتاج مساعدة' },
      ],
      submit: 'إرسال الطلب',
      successTitle: 'تم استلام طلبك!',
      successMessage: 'شكراً للتواصل — سنرد عليك قريباً.',
      orDivider: 'أو',
      startNow: 'ابدأ الآن',
    },
    footer: {
      tagline: '— نظام CRM ذكي للأعمال في إسرائيل',
      rights: '© 2026 Dayli. جميع الحقوق محفوظة.',
    },
    whatsappPrefill: 'مرحباً، أريد معرفة المزيد عن Dayli',
  },
  en: {
    meta: {
      title: 'Dayli — Smart CRM for Businesses',
      description:
        'Dayli unifies calendar, clients, documents and WhatsApp reminders in one place — with an AI agent working for you 24/7.',
    },
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      contact: 'Contact',
      login: 'Log in',
      cta: 'Get started',
      ctaShort: 'Start',
      menu: 'Menu',
      language: 'Language',
    },
    hero: {
      badge: 'Smart CRM for businesses',
      headlineLine1: 'Run your business',
      headlineLine2: 'in one day',
      subheadline:
        'Dayli unifies calendar, clients, documents and WhatsApp reminders in one place — with an AI agent working for you 24/7.',
      primaryCta: 'Start free trial',
      secondaryCta: 'Watch demo',
      proof: 'No credit card · Setup in 2 minutes',
      mockupUrl: 'app.dayli.io',
      mockupNavLabel: 'Features',
      mockupNav: [
        { label: 'Smart calendar', active: true },
        { label: 'WhatsApp reminders' },
        { label: 'Client CRM' },
        { label: 'Documents & PDF' },
        { label: 'AI agent 24/7' },
      ],
      mockupTitle: 'Smart calendar',
      mockupSubtitle: 'Everything you need',
    },
    features: {
      eyebrow: 'Everything you need',
      title: 'Fewer tools. More clients.',
      subtitle: 'Built around your day — from the first meeting to the last invoice.',
      items: [
        {
          title: 'Smart calendar & appointments',
          description: 'Synced scheduling, automatic reminders and real-time availability.',
        },
        {
          title: 'WhatsApp reminders',
          description: 'Send arrival confirmations and follow-ups directly to the client’s WhatsApp.',
        },
        {
          title: 'Client CRM',
          description: 'Every detail on every client — history, documents and notes in one place.',
        },
        {
          title: 'Documents & PDF',
          description: 'Generate quotes, invoices and receipts with custom templates.',
        },
        {
          title: 'AI agent 24/7',
          description: 'Instant replies to leads, meeting scheduling and inquiry filtering around the clock.',
        },
        {
          title: 'Advanced automations',
          description: 'Smart workflows that save hours of work every week.',
        },
      ],
    },
    featuresShowcase: {
      headline: 'Tools that work for you',
      subheadline: 'Powerful features to run your business smoothly',
      navLabel: 'Features',
      tipLabel: 'Pro Tip',
      mockupUrl: 'app.dayli.io',
      assistantName: 'Dayli Assistant',
      online: 'Online',
      typeMessage: 'Type a message...',
      demoClient: 'Sarah Johnson',
      demoClientInitials: 'SJ',
      demoClientSince: 'Client since 2022',
      demoAppointments: '12 appointments',
      whatsapp: {
        title: 'WhatsApp reminders',
        description: 'Automatic reminders sent to clients via WhatsApp'
      },
      calendar: {
        title: 'Smart Calendar',
        description: 'Manage your schedule and appointments easily'
      },
      crm: {
        title: 'Client CRM',
        description: 'Manage your client relationships and history',
        clientsTitle: 'Clients',
        clientsCount: 'total clients',
        addButton: 'Add Client',
        appointments: 'appointments',
        stats: {
          active: 'Active',
          pending: 'Pending',
          retention: 'Retention'
        }
      },
      documents: {
        title: 'Documents & PDF',
        subtitle: 'Auto-generated PDFs',
        generate: 'New',
        clientFiles: 'Client Files',
        files: 'files',
        summary: 'Appointment Summary',
        new: 'NEW',
        treatmentPlan: 'Treatment Plan',
        updated: 'Updated',
        medicalHistory: 'Medical History',
        created: 'Created',
        invoice: 'Invoice #INV-2026-06',
        paid: 'PAID',
        visitDate: 'Visit: June 15, 2026',
        invoiceDate: 'June 15, 2026',
        receipt: 'Payment Receipt',
        receiptDate: 'June 15, 2026',
        prescription: 'Prescription',
        rxDate: 'June 15, 2026',
        aiLabel: 'AI Document Assistant',
        aiDesc: 'Auto-generates appointment summaries, invoices & prescriptions'
      },
      ai: {
        title: 'AI agent 24/7',
        description: 'AI-powered assistant available 24/7 for your business',
        status: 'Available 24/7',
        badge: 'Beta',
        greeting: "Hello! I'm your Dayli AI assistant. I can help you with scheduling, client management, and much more. What would you like to know?",
        userQuery: "Show me tomorrow's appointments",
        response: 'You have 4 appointments tomorrow:',
        inputPlaceholder: 'Ask me anything...',
        suggestion1: 'Schedule new appointment',
        suggestion2: 'Send reminders',
        suggestion3: 'Client stats',
        pending: 'Pending confirmation'
      },
      reports: {
        title: 'Client reports',
        description: 'Create and send professional client reports in one click'
      },
      whatsappMessages: {
        sent: [
          "Hi Sarah, just a reminder about your appointment tomorrow at 2:00 PM",
          "Perfect! See you tomorrow at the downtown location",
          "Your appointment is confirmed for 3:00 PM on Thursday"
        ],
        received: [
          "Thanks for the reminder! I'll be there",
          "Great, thank you!",
          "Confirmed! Looking forward to it"
        ]
      }
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Choose the plan that fits you',
      subtitle: 'Transparent pricing. No surprises. Cancel anytime.',
      perMonth: 'month',
      billing: {
        monthly: 'Monthly',
        annual: 'Annual',
        save: 'Save 21%',
        savePerYear: 'You save {amount}/year',
      },
      tiers: [
        {
          id: 'basic',
          name: 'Basic',
          price: '₪99',
          annualPrice: '₪78',
          period: 'month',
          description: 'For solo businesses',
          cta: 'Get started',
          features: [
            'Calendar and appointment management',
            'Basic reports and statistics',
            'WhatsApp appointment reminders',
            'Fixed reminder message template',
            'Full mobile access',
            '1 user · 1 calendar',
            'Up to 150 reminder messages/month',
            'Email support',
          ],
        },
        {
          id: 'standard',
          name: 'Standard',
          price: '₪249',
          annualPrice: '₪197',
          period: 'month',
          description: 'For growing teams',
          highlighted: true,
          badge: 'Most popular',
          cta: 'Get started',
          features: [
            'Everything in Basic, plus:',
            'Advanced WhatsApp integration',
            'Custom message templates',
            'Automated reminders and follow-ups',
            'Client database (CRM)',
            'Document creation and PDF export',
            'Up to 3 templates · 100 PDFs/month',
            'Up to 3 users · 2 calendars',
            'Priority support',
          ],
        },
        {
          id: 'premium',
          name: 'Premium',
          price: '₪449',
          annualPrice: '₪355',
          period: 'month',
          description: 'For automation and AI',
          cta: 'Upgrade to Premium',
          features: [
            'Everything in Standard, plus:',
            '24/7 AI agent for auto-replies',
            'Automated lead filtering and management',
            'Automatic client and lead follow-up',
            'Instant replies to new inquiries',
            'Automated appointment scheduling',
            'Custom AI knowledge base',
            'Unlimited PDF · 5+ templates',
            '4+ users · 3+ calendars',
            'Priority 24/7 support',
          ],
        },
      ],
    },
    cta: {
      title: 'Ready to reclaim your day?',
      subtitle: 'Join businesses already saving hours every week with Dayli.',
      primary: 'Start free trial',
    },
    contactForm: {
      heading: 'Get in touch',
      subheading: "We'll get back to you within one business day.",
      businessNamePlaceholder: 'Business name',
      businessCategoryLabel: 'Business category',
      businessCategoryDefault: 'Select a category',
      businessCategoryOptions: [
        { value: 'clinic', label: 'Clinic / Medical' },
        { value: 'salon', label: 'Salon / Spa' },
        { value: 'lessons', label: 'Private lessons' },
        { value: 'realestate', label: 'Real estate' },
        { value: 'other', label: 'Other' },
      ],
      namePlaceholder: 'Full name',
      phonePlaceholder: 'Phone number',
      emailPlaceholder: 'Email address',
      gmailPlaceholder: 'Gmail (optional)',
      gmailHint: 'Used for WhatsApp API & Meta Business setup',
      messagePlaceholder: 'How can we help? (optional)',
      whatsappStatusLabel: 'Your WhatsApp type',
      whatsappStatusDefault: 'Select your WhatsApp type',
      whatsappStatusOptions: [
        { value: 'regular', label: 'Regular WhatsApp only' },
        { value: 'business_app', label: 'WhatsApp Business — free app' },
        { value: 'api_verified', label: 'WhatsApp API — verified via Meta' },
        { value: 'unsure', label: "Not sure — I'd like guidance" },
      ],
      submit: 'Send message',
      successTitle: 'Message received!',
      successMessage: "Thanks for reaching out — we'll be in touch shortly.",
      orDivider: 'or',
      startNow: 'Start now',
    },
    footer: {
      tagline: '— Smart CRM for businesses in Israel',
      rights: '© 2026 Dayli. All rights reserved.',
    },
    whatsappPrefill: 'Hi, I would like to learn more about Dayli',
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export const WHATSAPP_NUMBER = '972500000000';

export function getWhatsAppUrl(locale: Locale): string {
  const text = encodeURIComponent(messages[locale].whatsappPrefill);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function arrowIconClass(locale: Locale): string {
  return isRtl(locale)
    ? 'h-4 w-4 transition-transform group-hover:-translate-x-1'
    : 'h-4 w-4 transition-transform group-hover:translate-x-1';
}
