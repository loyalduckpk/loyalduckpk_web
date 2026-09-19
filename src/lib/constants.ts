export interface RewardCardItem {
  id: string;
  name: string;
  category: string;
  type: 'points' | 'visits';
  current: number;
  target: number;
  badge: string;
  color: string;
}

export const SAMPLE_REWARDS: RewardCardItem[] = [
  {
    id: 'rec',
    name: 'REC Coffee Roasters',
    category: 'Specialty Café',
    type: 'points',
    current: 420,
    target: 500,
    badge: '80 pts to free flat white',
    color: '#3B82F6',
  },
  {
    id: 'coffee_co',
    name: 'Coffee Co.',
    category: 'Espresso Bar',
    type: 'visits',
    current: 4,
    target: 5,
    badge: '1 visit to go',
    color: '#10B981',
  },
  {
    id: 'salon_x',
    name: 'Salon X Grooming',
    category: 'Barber & Spa',
    type: 'points',
    current: 180,
    target: 300,
    badge: '120 pts to free trim',
    color: '#F59E0B',
  },
];

export const LIFECYCLE_STEPS = [
  {
    step: '01',
    title: 'JOIN ONCE',
    description: 'At your first Loyal Duck business, scan and verify your phone.',
    highlight: '60-second simple phone OTP',
    icon: 'Sparkles',
  },
  {
    step: '02',
    title: 'USE THE SAME ACCOUNT',
    description: "At the next business: scan Duck ID or phone number. You're already in.",
    highlight: 'No new app or signup',
    icon: 'QrCode',
  },
  {
    step: '03',
    title: 'BUSINESS RECORDS EVENT',
    description: 'Staff records your purchase or qualifying visit in 2 seconds at the counter.',
    highlight: 'Instant POS verification',
    icon: 'CreditCard',
  },
  {
    step: '04',
    title: 'REWARDS GROW',
    description: 'Points or visits stay separate for that merchant in your account.',
    highlight: 'Independent store balances',
    icon: 'TrendingUp',
  },
  {
    step: '05',
    title: 'REDEEM',
    description: 'Use the reward at the business that issued it. Clean and effortless.',
    highlight: 'Direct merchant redemption',
    icon: 'Gift',
  },
];

export const IDENTIFICATION_WAYS = [
  {
    id: 'qr',
    badge: 'DISCOVERY',
    title: 'Scan the Business QR',
    tagline: 'Great for discovering or joining your first Loyal Duck business.',
    description:
      'Point your camera at the counter stand or window sticker. Your browser opens your rewards wallet immediately.',
    icon: 'ScanLine',
    accentColor: '#2563EB',
  },
  {
    id: 'duck_id',
    badge: 'RETURNING',
    title: 'Show your Duck ID',
    tagline: 'Returning customers open their personal QR.',
    description:
      'Staff scans your rotating Duck ID code from your phone screen. Instant matching with zero checkout delays.',
    icon: 'Smartphone',
    accentColor: '#10B981',
  },
  {
    id: 'phone',
    badge: 'ZERO BATTERY / PHONE ONLY',
    title: 'Say your Phone Number',
    tagline: 'Staff can exact-match your verified phone number.',
    description:
      'Phone out of battery? Just tell the cashier your phone number. You still earn your stamps or points every time.',
    icon: 'PhoneCall',
    accentColor: '#F59E0B',
  },
];

export const BUSINESS_CATEGORIES = [
  {
    name: 'Cafés',
    status: 'ACTIVE',
    reward: 'Every 6th coffee free',
    icon: 'Coffee',
    bgLight: '#EFF6FF',
    accent: '#2563EB',
  },
  {
    name: 'Restaurants',
    status: 'ACTIVE',
    reward: 'Points toward free dessert or main',
    icon: 'Utensils',
    bgLight: '#ECFDF5',
    accent: '#059669',
  },
  {
    name: 'Salons & Spas',
    status: 'ACTIVE',
    reward: 'Points toward your next treatment',
    icon: 'Scissors',
    bgLight: '#FFFBEB',
    accent: '#D97706',
  },
  {
    name: 'Car Washes',
    status: 'POPULAR',
    reward: '5 washes, 6th wash free',
    icon: 'Car',
    bgLight: '#F5F3FF',
    accent: '#7C3AED',
  },
  {
    name: 'Barbers',
    status: 'ACTIVE',
    reward: 'Visits toward a free haircut',
    icon: 'UserCheck',
    bgLight: '#FFF1F2',
    accent: '#E11D48',
  },
  {
    name: 'Bakeries',
    status: 'ACTIVE',
    reward: 'Free pastry after 8 visits',
    icon: 'Cake',
    bgLight: '#FEF3C7',
    accent: '#B45309',
  },
  {
    name: 'Retail Boutiques',
    status: 'ACTIVE',
    reward: 'Points on every purchase',
    icon: 'ShoppingBag',
    bgLight: '#ECFEFF',
    accent: '#0891B2',
  },
  {
    name: 'Gyms & Studios',
    status: 'ACTIVE',
    reward: 'Reward regular check-ins',
    icon: 'Dumbbell',
    bgLight: '#F1F5F9',
    accent: '#475569',
  },
];

export const CORE_PILLARS = [
  {
    number: '01',
    title: 'One Customer Identity',
    description:
      'Join once and use the same Loyal Duck identity across participating businesses. No 20 different plastic cards or app accounts.',
    highlight: 'Zero onboarding friction',
  },
  {
    number: '02',
    title: 'Merchant-Owned Rewards',
    description:
      'Each business controls its own points, visits, and promotions. Your rewards stay with you, and merchants never lose their customers to competitors.',
    highlight: 'Complete merchant sovereignty',
  },
  {
    number: '03',
    title: 'One Familiar Experience',
    description:
      'Customers learn Loyal Duck once. Staff learns the 2-tap checkout once. Every participating business plugs effortlessly into that proven habit.',
    highlight: 'Instantly recognized at the counter',
  },
];

export const FAQS = [
  {
    question: 'Do I register again at every Loyal Duck business?',
    answer:
      'No! That is the core superpower of Loyal Duck. You verify your phone number once on your first visit. At every other participating cafe, restaurant, salon, or shop, you simply show your Duck ID QR or give your phone number. You are already in the system.',
  },
  {
    question: 'Are all my points combined into one big pool?',
    answer:
      'No. Balances stay strictly separate. Points earned at your favorite coffee shop stay at that coffee shop, and visits at your salon stay at that salon. Loyal Duck provides one clean, universal pocket for all your independent memberships without messy points pooling.',
  },
  {
    question: 'How does staff find me at checkout?',
    answer:
      'Staff can find your account in three frictionless ways: 1) by scanning your personal Duck ID QR code from the app/web wallet, 2) by typing your verified mobile number into their POS counter, or 3) when you scan the counter QR sticker directly.',
  },
  {
    question: 'Do I need to download a heavy app to use it?',
    answer:
      'Not required! You can open your Duck ID and rewards pass directly in any modern mobile browser without downloading anything. If you prefer the native app experience, Loyal Duck is also available for iOS and Android with instant lock-screen passes.',
  },
  {
    question: 'Can businesses customize their own rewards rules?',
    answer:
      'Yes, 100%. A business can choose between a Points Program (e.g. 1 point per Rs 100 spent) or a Visit/Stamp Program (e.g. Buy 5 coffees, get the 6th free), set their own tier perks, and customize redemption rules with full autonomy.',
  },
  {
    question: 'What hardware does a merchant need to start?',
    answer:
      'Zero new hardware! Loyal Duck Counter runs seamlessly on any existing tablet, iPad, Android phone, or desktop browser already at your cashier desk. We provide your printed acrylic counter stands and QR stickers.',
  },
];
