import type { Locale } from './ui';

export type FeatureMockupCopy = {
  whatsapp: {
    title: string;
    subtitle: string;
    search: string;
    autoReplyTitle: string;
    autoReplyDesc: string;
    online: string;
    autoLabel: string;
    inputPlaceholder: string;
    chats: { init: string; name: string; msg: string; time: string; badge?: number; active?: boolean }[];
    messages: { type: 'sent' | 'recv'; text: string; time: string; auto?: boolean }[];
  };
  calendar: {
    month: string;
    search: string;
    filter: string;
    newMeeting: string;
    days: { d: string; l: string; dot?: boolean; cur?: boolean; dim?: boolean }[];
    similarEvents: string;
    draft: string;
    lunchBreak: string;
    events: {
      time: string;
      init: string;
      name: string;
      detail: string;
      similar?: { name: string; date: string }[];
      break?: boolean;
      draft?: boolean;
      tall?: boolean;
    }[];
  };
  crm: {
    title: string;
    subtitle: string;
    search: string;
    addClient: string;
    stats: { label: string; val: string }[];
    appointmentsLabel: string;
    clients: {
      init: string;
      name: string;
      phone: string;
      last: string;
      apps: number;
      status: string;
      sc: 'active' | 'pending';
    }[];
  };
  reports: {
    title: string;
    subtitle: string;
    templates: string;
    newReport: string;
    selectedClient: string;
    clientName: string;
    clientInit: string;
    clientMeta: string;
    reportType: string;
    types: string[];
    recentReports: string;
    sent: string;
    draft: string;
    downloadPdf: string;
    sendToClient: string;
    recent: { name: string; date: string; status: string; sent: boolean }[];
  };
  ai: {
    title: string;
    status: string;
    badge: string;
    greeting: string;
    suggestions: string[];
    userQuery: string;
    responseIntro: string;
    inputPlaceholder: string;
    appointments: { time: string; name: string; type: string; pending?: boolean }[];
  };
};

const copy: Record<Locale, FeatureMockupCopy> = {
  he: {
    whatsapp: {
      title: 'אוטומציות וואטסאפ',
      subtitle: 'ניהול הודעות ותגובות אוטומטיות',
      search: 'חיפוש...',
      autoReplyTitle: 'תגובות אוטומטיות',
      autoReplyDesc: 'ענייה מחוץ לשעות הפעילות',
      online: 'מחובר',
      autoLabel: 'אוטומטי',
      inputPlaceholder: 'הקלד הודעה...',
      chats: [
        { init: 'יכ', name: 'יעל כהן', msg: 'היי, רציתי לקבוע פגישה', time: '10:42', badge: 2, active: true },
        { init: 'מל', name: 'משה לוי', msg: 'הודעה אוטומטית נשלחה', time: 'אתמול', badge: 0 },
        { init: 'דא', name: 'דוד אברהם', msg: 'מעולה, תודה רבה!', time: "יום ב'", badge: 0 },
        { init: 'חח', name: 'חברת החשמל', msg: "חשבונית מס' 4582 נשלחה.", time: '12/10', badge: 0 },
      ],
      messages: [
        { type: 'recv', text: 'היי, רציתי לקבוע פגישה למחר בבוקר. האם יש פנוי?', time: '10:42' },
        { type: 'sent', text: 'היי יעל! כמובן, יש לי פנוי מחר בין 10:00 ל-13:00. איזה שעה מתאימה לך?', time: '10:43', auto: true },
        { type: 'recv', text: 'מושלם, 11:00 מתאימה לי', time: '10:44' },
        { type: 'sent', text: 'הי יעל, תזכורת לגבי התור שלך מחר בשעה 11:00 ✓', time: '10:45' },
      ],
    },
    calendar: {
      month: 'נובמבר 2023',
      search: 'חיפוש',
      filter: 'סינון',
      newMeeting: '+ פגישה חדשה',
      days: [
        { d: '12', l: "א'", dot: false, cur: false },
        { d: '13', l: "ב'", dot: true, cur: true },
        { d: '14', l: "ג'", dot: true, cur: false },
        { d: '15', l: "ד'", dot: false, cur: false, dim: true },
        { d: '16', l: "ה'", dot: false, cur: false },
        { d: '17', l: "ו'", dot: true, cur: false },
        { d: '18', l: "ש'", dot: false, cur: false },
      ],
      similarEvents: 'אירועים דומים',
      draft: 'טיוטה',
      lunchBreak: 'הפסקת צהריים',
      events: [
        {
          time: '08:00',
          init: 'מכ',
          name: 'משפחת כהן',
          detail: 'פגישת היכרות · Zoom · 08:30–09:30',
          similar: [
            { name: 'משפחת לוי', date: '10/11 · 08:00' },
            { name: 'משפחת אברהם', date: '03/11 · 09:00' },
          ],
        },
        { time: '09:00', init: '', name: '', detail: '' },
        {
          time: '10:00',
          init: 'דש',
          name: 'דוד שרון',
          detail: 'סיור נכס · רחוב הרצל 15 · 10:30–12:00',
          tall: true,
        },
        { time: '12:00', init: '', name: '', detail: '', break: true },
        {
          time: '13:00',
          init: '',
          name: 'רחל לוי',
          detail: 'ייעוץ ראשוני · 13:00–14:00',
          draft: true,
        },
      ],
    },
    crm: {
      title: 'לקוחות CRM',
      subtitle: 'ניהול רשימת הלקוחות והסטטוס שלהם',
      search: 'חיפוש לקוח...',
      addClient: '+ לקוח חדש',
      stats: [
        { label: 'סה"כ לקוחות', val: '156' },
        { label: 'פעילים', val: '134' },
        { label: 'ממתינים', val: '22' },
        { label: 'שימור', val: '89%' },
      ],
      appointmentsLabel: 'פגישות',
      clients: [
        { init: 'יכ', name: 'ישראל כהן', phone: '+972 52-123-4567', last: 'לפני יומיים', apps: 12, status: 'פעיל', sc: 'active' },
        { init: 'רל', name: 'רחל לוי', phone: '+972 54-234-5678', last: 'לפני שבוע', apps: 8, status: 'ממתין', sc: 'pending' },
        { init: 'דש', name: 'דוד שרון', phone: '+972 50-345-6789', last: 'לפני יומיים', apps: 5, status: 'פעיל', sc: 'active' },
        { init: 'מג', name: 'מיכל גולן', phone: '+972 53-456-7890', last: 'לפני חודש', apps: 3, status: 'ממתין', sc: 'pending' },
        { init: 'אב', name: 'אבי ברקוביץ', phone: '+972 58-567-8901', last: 'לפני 3 ימים', apps: 15, status: 'פעיל', sc: 'active' },
      ],
    },
    reports: {
      title: 'דוחות לקוחות',
      subtitle: 'יצירה ושליחה של דוחות מקצועיים ללקוחות',
      templates: 'תבניות',
      newReport: '+ דוח חדש',
      selectedClient: 'לקוח נבחר',
      clientName: 'ישראל כהן',
      clientInit: 'יכ',
      clientMeta: '12 פגישות · לקוח מאז 2022',
      reportType: 'סוג דוח',
      types: ['סיכום חודשי', 'דוח פגישות', 'דוח תשלומים', 'דוח התקדמות'],
      recentReports: 'דוחות אחרונים',
      sent: 'נשלח',
      draft: 'טיוטה',
      downloadPdf: 'הורד PDF',
      sendToClient: 'שלח ללקוח',
      recent: [
        { name: 'סיכום יוני 2026', date: '23/06/2026', status: 'נשלח', sent: true },
        { name: 'דוח פגישות — מאי', date: '01/06/2026', status: 'טיוטה', sent: false },
        { name: 'דוח תשלומים Q1', date: '15/04/2026', status: 'נשלח', sent: true },
        { name: 'דוח התקדמות — Q1', date: '02/04/2026', status: 'נשלח', sent: true },
      ],
    },
    ai: {
      title: 'עוזר AI של Dayli',
      status: 'זמין 24/7 · עונה בשניות',
      badge: 'בטא',
      greeting: 'שלום! אני עוזר ה-AI של Dayli. אני יכול לעזור לך בניהול לוח הזמנים, לקוחות, שליחת תזכורות ועוד. במה אוכל לעזור היום?',
      suggestions: ['הצג פגישות מחר', 'שלח תזכורות', 'הוסף לקוח חדש', 'סטטיסטיקות חודשיות'],
      userQuery: 'הצג לי את הפגישות של מחר',
      responseIntro: 'יש לך <strong>4 פגישות</strong> מחר:',
      inputPlaceholder: 'שאל אותי כל דבר על העסק שלך...',
      appointments: [
        { time: '09:00', name: "שרה ג'ונסון", type: 'ייעוץ ראשוני' },
        { time: '11:30', name: "מיכאל צ'ן", type: 'מעקב טיפול' },
        { time: '14:00', name: 'אמה דייוויס', type: 'פגישת היכרות' },
        { time: '16:30', name: 'ממתין לאישור', type: 'לא אושר', pending: true },
      ],
    },
  },
  ar: {
    whatsapp: {
      title: 'أتمتة واتساب',
      subtitle: 'إدارة الرسائل والردود التلقائية',
      search: 'بحث...',
      autoReplyTitle: 'ردود تلقائية',
      autoReplyDesc: 'الرد خارج ساعات العمل',
      online: 'متصل',
      autoLabel: 'تلقائي',
      inputPlaceholder: 'اكتب رسالة...',
      chats: [
        { init: 'يك', name: 'يael كوهين', msg: 'مرحباً، أريد حجز موعد', time: '10:42', badge: 2, active: true },
        { init: 'مل', name: 'موشيه لevi', msg: 'تم إرسال رسالة تلقائية', time: 'أمس', badge: 0 },
        { init: 'دا', name: 'داود إبراهim', msg: 'ممتاز، شكراً!', time: 'الاثنين', badge: 0 },
        { init: 'شر', name: 'شركة الكهرباء', msg: 'تم إرسال فاتورة رقم 4582.', time: '12/10', badge: 0 },
      ],
      messages: [
        { type: 'recv', text: 'مرحباً، أريد حجز موعد غداً صباحاً. هل يوجد وقت متاح؟', time: '10:42' },
        { type: 'sent', text: 'مرحباً! بالطبع، لدي وقت غداً بين 10:00 و13:00. أي ساعة تناسبك؟', time: '10:43', auto: true },
        { type: 'recv', text: 'ممتاز، 11:00 يناسبني', time: '10:44' },
        { type: 'sent', text: 'مرحباً، تذكير بموعدك غداً الساعة 11:00 ✓', time: '10:45' },
      ],
    },
    calendar: {
      month: 'نوفمبر 2023',
      search: 'بحث',
      filter: 'تصفية',
      newMeeting: '+ موعد جديد',
      days: [
        { d: '12', l: 'أ', dot: false, cur: false },
        { d: '13', l: 'ب', dot: true, cur: true },
        { d: '14', l: 'ج', dot: true, cur: false },
        { d: '15', l: 'د', dot: false, cur: false, dim: true },
        { d: '16', l: 'ه', dot: false, cur: false },
        { d: '17', l: 'و', dot: true, cur: false },
        { d: '18', l: 'ش', dot: false, cur: false },
      ],
      similarEvents: 'أحداث مشابهة',
      draft: 'مسودة',
      lunchBreak: 'استراحة الغداء',
      events: [
        {
          time: '08:00',
          init: 'ك',
          name: 'عائلة كوهين',
          detail: 'اجتماع تعريفي · Zoom · 08:30–09:30',
          similar: [
            { name: 'عائلة levi', date: '10/11 · 08:00' },
            { name: 'عائلة إبراهim', date: '03/11 · 09:00' },
          ],
        },
        { time: '09:00', init: '', name: '', detail: '' },
        {
          time: '10:00',
          init: 'دش',
          name: 'داود Sharon',
          detail: 'جولة عقار · شارع Herzl 15 · 10:30–12:00',
          tall: true,
        },
        { time: '12:00', init: '', name: '', detail: '', break: true },
        {
          time: '13:00',
          init: '',
          name: 'رachel levi',
          detail: 'استشارة أولية · 13:00–14:00',
          draft: true,
        },
      ],
    },
    crm: {
      title: 'عملاء CRM',
      subtitle: 'إدارة قائمة العملاء وحالاتهم',
      search: 'بحث عن عميل...',
      addClient: '+ عميل جديد',
      stats: [
        { label: 'إجمالي العملاء', val: '156' },
        { label: 'نشط', val: '134' },
        { label: 'معلق', val: '22' },
        { label: 'الاحتفاظ', val: '89%' },
      ],
      appointmentsLabel: 'مواعيد',
      clients: [
        { init: 'يك', name: 'Israel كوهين', phone: '+972 52-123-4567', last: 'منذ يومين', apps: 12, status: 'نشط', sc: 'active' },
        { init: 'rl', name: 'Rachel levi', phone: '+972 54-234-5678', last: 'منذ أسبوع', apps: 8, status: 'معلق', sc: 'pending' },
        { init: 'ds', name: 'David Sharon', phone: '+972 50-345-6789', last: 'منذ يومين', apps: 5, status: 'نشط', sc: 'active' },
        { init: 'mg', name: 'Michal Golan', phone: '+972 53-456-7890', last: 'منذ شهر', apps: 3, status: 'معلق', sc: 'pending' },
        { init: 'ab', name: 'Avi Berkowitz', phone: '+972 58-567-8901', last: 'منذ 3 أيام', apps: 15, status: 'نشط', sc: 'active' },
      ],
    },
    reports: {
      title: 'تقارير العملاء',
      subtitle: 'إنشاء وإرسال تقارير احترافية للعملاء',
      templates: 'قوالب',
      newReport: '+ تقرير جديد',
      selectedClient: 'العميل المحدد',
      clientName: 'ישראל כהן',
      clientInit: 'إك',
      clientMeta: '12 موعد · عميل منذ 2022',
      reportType: 'نوع التقرير',
      types: ['ملخص شهري', 'تقرير المواعيد', 'تقرير المدفوعات', 'تقرير التقدم'],
      recentReports: 'التقارير الأخيرة',
      sent: 'تم الإرسال',
      draft: 'مسودة',
      downloadPdf: 'تحميل PDF',
      sendToClient: 'إرسال للعميل',
      recent: [
        { name: 'ملخص يونيو 2026', date: '23/06/2026', status: 'تم الإرسال', sent: true },
        { name: 'تقرير المواعيد — ماio', date: '01/06/2026', status: 'مسودة', sent: false },
        { name: 'تقرير المدفوعات Q1', date: '15/04/2026', status: 'تم الإرسال', sent: true },
        { name: 'تقرير التقدم — Q1', date: '02/04/2026', status: 'تم الإرسال', sent: true },
      ],
    },
    ai: {
      title: 'مساعد Dayli الذكي',
      status: 'متاح 24/7 · يرد في ثوانٍ',
      badge: 'بيتا',
      greeting: 'مرحباً! أنا مساعد Dayli الذكي. يمكنني مساعدتك في إدارة الجدول والعملاء وإرسال التذكيرات والمزيد. كيف يمكنني المساعدة اليوم؟',
      suggestions: ['عرض مواعيد الغد', 'إرسال تذكيرات', 'إضافة عميل جديد', 'إحصائيات شهرية'],
      userQuery: 'أرني مواعيد الغد',
      responseIntro: 'لديك <strong>4 مواعيد</strong> غداً:',
      inputPlaceholder: 'اسألني أي شيء عن عملك...',
      appointments: [
        { time: '09:00', name: 'Sarah Johnson', type: 'استشارة أولية' },
        { time: '11:30', name: 'Michael Chen', type: 'متابعة علاج' },
        { time: '14:00', name: 'Emma Davis', type: 'اجتماع تعريفي' },
        { time: '16:30', name: 'بانتظار التأكيد', type: 'غير مؤكد', pending: true },
      ],
    },
  },
  en: {
    whatsapp: {
      title: 'WhatsApp automations',
      subtitle: 'Manage messages and automatic replies',
      search: 'Search...',
      autoReplyTitle: 'Auto-replies',
      autoReplyDesc: 'Reply outside business hours',
      online: 'Online',
      autoLabel: 'Automatic',
      inputPlaceholder: 'Type a message...',
      chats: [
        { init: 'YC', name: 'Yael Cohen', msg: 'Hi, I wanted to book a meeting', time: '10:42', badge: 2, active: true },
        { init: 'ML', name: 'Moshe Levi', msg: 'Automatic message sent', time: 'Yesterday', badge: 0 },
        { init: 'DA', name: 'David Abraham', msg: 'Great, thank you!', time: 'Mon', badge: 0 },
        { init: 'EC', name: 'Electric Co.', msg: 'Invoice #4582 sent.', time: '12/10', badge: 0 },
      ],
      messages: [
        { type: 'recv', text: 'Hi, I wanted to book a meeting for tomorrow morning. Any availability?', time: '10:42' },
        { type: 'sent', text: 'Hi Yael! Sure, I have availability tomorrow between 10:00 and 13:00. What time works for you?', time: '10:43', auto: true },
        { type: 'recv', text: 'Perfect, 11:00 works for me', time: '10:44' },
        { type: 'sent', text: 'Hi Yael, reminder about your appointment tomorrow at 11:00 ✓', time: '10:45' },
      ],
    },
    calendar: {
      month: 'November 2023',
      search: 'Search',
      filter: 'Filter',
      newMeeting: '+ New meeting',
      days: [
        { d: '12', l: 'Sun', dot: false, cur: false },
        { d: '13', l: 'Mon', dot: true, cur: true },
        { d: '14', l: 'Tue', dot: true, cur: false },
        { d: '15', l: 'Wed', dot: false, cur: false, dim: true },
        { d: '16', l: 'Thu', dot: false, cur: false },
        { d: '17', l: 'Fri', dot: true, cur: false },
        { d: '18', l: 'Sat', dot: false, cur: false },
      ],
      similarEvents: 'Similar events',
      draft: 'Draft',
      lunchBreak: 'Lunch break',
      events: [
        {
          time: '08:00',
          init: 'KC',
          name: 'Cohen Family',
          detail: 'Intro meeting · Zoom · 08:30–09:30',
          similar: [
            { name: 'Levi Family', date: '10/11 · 08:00' },
            { name: 'Abraham Family', date: '03/11 · 09:00' },
          ],
        },
        { time: '09:00', init: '', name: '', detail: '' },
        {
          time: '10:00',
          init: 'DS',
          name: 'David Sharon',
          detail: 'Property tour · Herzl St 15 · 10:30–12:00',
          tall: true,
        },
        { time: '12:00', init: '', name: '', detail: '', break: true },
        {
          time: '13:00',
          init: '',
          name: 'Rachel Levi',
          detail: 'Initial consultation · 13:00–14:00',
          draft: true,
        },
      ],
    },
    crm: {
      title: 'Client CRM',
      subtitle: 'Manage your client list and their status',
      search: 'Search client...',
      addClient: '+ Add client',
      stats: [
        { label: 'Total clients', val: '156' },
        { label: 'Active', val: '134' },
        { label: 'Pending', val: '22' },
        { label: 'Retention', val: '89%' },
      ],
      appointmentsLabel: 'Meetings',
      clients: [
        { init: 'IC', name: 'Israel Cohen', phone: '+972 52-123-4567', last: '2 days ago', apps: 12, status: 'Active', sc: 'active' },
        { init: 'RL', name: 'Rachel Levi', phone: '+972 54-234-5678', last: '1 week ago', apps: 8, status: 'Pending', sc: 'pending' },
        { init: 'DS', name: 'David Sharon', phone: '+972 50-345-6789', last: '2 days ago', apps: 5, status: 'Active', sc: 'active' },
        { init: 'MG', name: 'Michal Golan', phone: '+972 53-456-7890', last: '1 month ago', apps: 3, status: 'Pending', sc: 'pending' },
        { init: 'AB', name: 'Avi Berkowitz', phone: '+972 58-567-8901', last: '3 days ago', apps: 15, status: 'Active', sc: 'active' },
      ],
    },
    reports: {
      title: 'Client reports',
      subtitle: 'Create and send professional client reports',
      templates: 'Templates',
      newReport: '+ New report',
      selectedClient: 'Selected client',
      clientName: 'Israel Cohen',
      clientInit: 'IC',
      clientMeta: '12 meetings · Client since 2022',
      reportType: 'Report type',
      types: ['Monthly summary', 'Meetings report', 'Payments report', 'Progress report'],
      recentReports: 'Recent reports',
      sent: 'Sent',
      draft: 'Draft',
      downloadPdf: 'Download PDF',
      sendToClient: 'Send to client',
      recent: [
        { name: 'June 2026 summary', date: '23/06/2026', status: 'Sent', sent: true },
        { name: 'Meetings report — May', date: '01/06/2026', status: 'Draft', sent: false },
        { name: 'Payments report Q1', date: '15/04/2026', status: 'Sent', sent: true },
        { name: 'Progress report — Q1', date: '02/04/2026', status: 'Sent', sent: true },
      ],
    },
    ai: {
      title: 'Dayli AI Assistant',
      status: 'Available 24/7 · Replies in seconds',
      badge: 'Beta',
      greeting: "Hello! I'm your Dayli AI assistant. I can help you manage your schedule, clients, send reminders, and more. How can I help today?",
      suggestions: ["Show tomorrow's meetings", 'Send reminders', 'Add new client', 'Monthly stats'],
      userQuery: "Show me tomorrow's appointments",
      responseIntro: 'You have <strong>4 appointments</strong> tomorrow:',
      inputPlaceholder: 'Ask me anything about your business...',
      appointments: [
        { time: '09:00', name: 'Sarah Johnson', type: 'Initial consultation' },
        { time: '11:30', name: 'Michael Chen', type: 'Follow-up session' },
        { time: '14:00', name: 'Emma Davis', type: 'Intro meeting' },
        { time: '16:30', name: 'Pending confirmation', type: 'Not confirmed', pending: true },
      ],
    },
  },
};

export function getFeatureMockupCopy(locale: Locale): FeatureMockupCopy {
  return copy[locale];
}
