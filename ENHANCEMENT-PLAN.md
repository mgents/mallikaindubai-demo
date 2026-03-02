# PHASE 2: ENHANCEMENTS

## Context

The initial 9-section demo is built and working. User feedback indicates we need to elevate the experience with:
1. **More impressive, creative content blocks** - Add 9-11 new sections across THREE buyer personas
2. **Realistic 3D Earth globe** - Replace wireframe with photorealistic globe
3. **Fix title wrapping** - "Intelligence Platform" breaking onto two lines

## Three Buyer Personas

The enhanced demo serves three distinct buyer types, each with dedicated sections and visual theming:

### 🏦 INSTITUTIONAL INVESTORS (Teal Theme)
**Who**: Family offices, private banks, HNWIs building portfolios
**Need**: Sophisticated analytics, risk modeling, portfolio theory
**Sections**: 5 institutional-grade sections with data-heavy visualizations
**Visual**: Teal-dominant palette (#0EA5E9), dark backgrounds, financial charts

### 💰 CASHFLOW SEEKERS (Gold Theme)
**Who**: Individual private investors seeking rental income streams
**Need**: Rental yield analysis, tenant insights, operating cost transparency
**Sections**: 2-3 income-focused sections with practical calculators
**Visual**: Gold-dominant palette (#D4A853), warm tones, ROI-focused metrics

### 🏡 PERSONAL HOME BUYERS (Warm Gradient Theme)
**Who**: End-users buying to live in Dubai (families, expats, visa seekers)
**Need**: Lifestyle matching, community info, move-in logistics
**Sections**: 2-3 lifestyle sections with emotional, human-centric design
**Visual**: Warm gradient (gold + coral/peach), softer imagery, family-oriented

**Visual Differentiation Strategy**: Each persona segment clearly announces itself with a section header badge (e.g., "🏦 FOR INSTITUTIONAL INVESTORS") and a subtle background color shift that maintains brand consistency while signaling the target audience.

---

## Quick Fixes

### 1. Fix Title Wrapping in Closing CTA
**File**: `components/sections/ClosingCTA.tsx` (line 87-90)

**Current** (breaks):
```tsx
AI-Enabled Investment
<br />
Intelligence Platform
```

**Fix - Better responsive sizing**:
```tsx
AI-Enabled Investment Intelligence Platform
className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient"
// Remove the <br /> and let it wrap naturally with smaller base size
```

### 2. Replace Wireframe Globe with Realistic Earth
**File**: `components/three/GlobeViz.tsx`

**Implementation**: Custom Three.js with NASA Earth textures

**Assets needed** (download to `public/textures/`):
- `earth-day.jpg` - 4K Earth texture (NASA Visible Earth)
- `earth-normal.jpg` - Normal map for surface detail

**Code approach**:
```tsx
import { useTexture } from '@react-three/drei'

const [colorMap, normalMap] = useTexture([
  '/textures/earth-day.jpg',
  '/textures/earth-normal.jpg',
])

<Sphere args={[1.5, 64, 64]}>
  <meshStandardMaterial
    map={colorMap}
    normalMap={normalMap}
    metalness={0.1}
    roughness={0.9}
  />
</Sphere>

// Atmospheric glow
<Sphere args={[1.55, 64, 64]}>
  <meshBasicMaterial
    color="#4A90E2"
    transparent
    opacity={0.15}
    side={THREE.BackSide}
  />
</Sphere>
```

---

## PART A: INSTITUTIONAL INVESTOR SECTIONS (5 sections)
**Theme**: Teal-dominant (#0EA5E9), dark backgrounds, financial sophistication
**Badge**: "🏦 FOR INSTITUTIONAL INVESTORS" appears at top of first section in this group

### Section 1: **Portfolio Intelligence Dashboard**
**Insert after**: UnderwritingTools

**Concept**: Multi-property portfolio view with correlation matrix showing diversification

**Visual Components**:
- **Correlation Matrix** (4x4 heatmap): Shows how different Dubai areas correlate
  - Green cells = low correlation (good diversification)
  - Red cells = high correlation (concentration risk)
  - Interactive hover shows coefficient + explanation
- **Dubai Map**: 2D stylized with property pins color-coded by area
- **Portfolio Allocation**: Pie chart showing % by area
- **Diversification Score**: Large gauge showing 87/100

**Animation**:
- Matrix cells fill row-by-row like cascading tiles
- Map pins drop in with stagger
- Pie chart draws clockwise

**Narrative**: "Build resilient portfolios. Our correlation engine shows which areas move together—so you can diversify with precision, not guesswork."

**Why it wows**: Correlation matrices = modern portfolio theory. Institutional investors recognize this immediately.

---

### Section 2: **Market Depth & Liquidity Scanner**
**Insert after**: SignalLayer

**Concept**: Order book-style depth chart showing supply/demand imbalance

**Visual Components**:
- **Depth Chart** (like crypto exchanges):
  - Left: Green bars = Buyer demand
  - Right: Red bars = Seller supply
  - Y-axis: Price per sqft
- **Metrics Strip**: Bid-Ask Spread, Days to Liquidity, Active Buyers, Inventory Turnover
- **Liquidity Treemap**: Dubai areas as rectangles
  - Size = market size
  - Color = liquidity (green=high, red=low)

**Animation**:
- Depth bars grow from center outward
- Metrics count up
- Treemap rectangles morph into position

**Narrative**: "Liquidity isn't luck—it's data. Know exactly how long it takes to exit any Dubai market, at any price point."

**Why it wows**: No real estate platform shows order book depth. Borrowed from financial markets—feels ultra-sophisticated.

---

### Section 3: **Macro Intelligence Layer**
**Insert after**: SegmentPositioning

**Concept**: Global macro factors affecting Dubai real estate

**Visual Components**:
- **Oil Price Chart**: Last 12mo + "87% correlated to Dubai luxury" badge
- **USD/AED FX Rate**: Stability rating AAA
- **World Map**: Trade flow arrows from SG/UK/China/India → Dubai
  - Width = capital flow volume
  - Animated flowing like liquid
- **Economic Indicators Grid**: GDP, Tourism, Expo Impact (each with micro sparkline)

**Animation**:
- Charts draw left-to-right
- Trade arrows flow continuously
- Indicators count up with sparklines

**Narrative**: "Dubai doesn't exist in a vacuum. Track the macro forces—oil, FX, capital flows—that move your market before headlines catch up."

**Why it wows**: Shows real estate as an asset class, not just properties. Institutional thinking.

---

### Section 4: **Developer Scorecard Matrix**
**Insert after**: DealRooms

**Concept**: Compare top 10 Dubai developers on 6 dimensions

**Visual Components**:
- **Comparison Table** (10 rows × 6 columns):
  - Rows: Emaar, Damac, Meraas, Nakheel, Select Group, Omniyat, etc.
  - Columns: Delivery Record, Quality Score, Financial Strength, Pipeline, Price Premium, Investor Sentiment
  - Each cell: Micro-visualization (bar/gauge/score)
- **Detail Card**: Appears on row hover with logo, stats, recent projects

**Animation**:
- Rows stagger in from left
- Cell contents animate (bars fill, scores count)
- Hover triggers slide-in detail card

**Narrative**: "Not all developers are equal. Our scorecard distills decades of delivery data into one decision-making grid."

**Why it wows**: Dense data presented elegantly. Feels like CBRE/JLL research.

---

### Section 5: **Predictive Yield Forecast**
**Insert after**: UnderwritingTools

**Concept**: ML-powered 36-month rental yield predictions with confidence intervals

**Visual Components**:
- **Multi-Line Forecast Chart**:
  - One line per Dubai area
  - Projects rental yield % for next 36 months
  - Confidence bands (shaded area)
  - Color: Gold=high confidence, Teal=moderate, Gray=low
- **Scenario Toggle**: Conservative / Base / Aggressive
- **AI Badge**: "Model trained on 15 years DLD data + 42 macro variables"

**Animation**:
- Lines draw left-to-right with per-area delay
- Confidence bands fade in after lines
- Click area to spotlight (others fade to 20%)

**Narrative**: "Stop guessing future yields. Our AI models 36-month rental trajectories with quantified confidence—so you invest with foresight, not hope."

**Why it wows**: Predictive analytics = cutting edge. Confidence intervals show intellectual honesty. Very Bloomberg-esque.

---

## PART B: CASHFLOW SEEKER SECTIONS (3 sections)
**Theme**: Gold-dominant (#D4A853), warm tones, income-focused
**Badge**: "💰 FOR CASHFLOW INVESTORS" appears at top of first section in this group

### Section 6: **Rental Income Optimizer**
**Insert after**: PredictiveYield

**Concept**: Interactive calculator showing true cash-on-cash returns with all hidden costs revealed

**Visual Components**:
- **Income Breakdown Card** (glassmorphic, gold accent):
  - Monthly rent input slider (AED 8K - 25K range)
  - Occupancy rate slider (85% - 98%)
  - **Live Calculation**: Annual gross income (AnimatedCounter)
- **Cost Breakdown Waterfall**:
  - Service charges (AED 12-18/sqft annually)
  - Property management fee (5-8% of rent)
  - Maintenance reserve (2% of property value)
  - DEWA deposits & cooling fees
  - Bars cascade down, color-coded (red for costs, green for net)
- **Cash-on-Cash Return Gauge**: Circular gauge showing final % (e.g., 7.2%)
  - Color shifts: <5% red, 5-7% amber, 7-9% gold, >9% green
- **Comparison Pills**: "Your Return: 7.2%" vs "Dubai Average: 5.8%" vs "Singapore: 2.1%"

**Animation**:
- Sliders have smooth spring physics
- Waterfall bars drop sequentially (250ms stagger)
- Gauge arc fills with liquid animation (1.2s)
- Comparison pills slide in from right (300ms stagger)

**Narrative**: "Rental income isn't just gross rent minus mortgage. We show every dirham—service charges, DEWA, chiller fees, property management—so your 6.5% yield projection is real, not aspirational."

**Why it wows**: Most platforms hide operating costs. Transparency builds trust with private investors.

---

### Section 7: **Tenant Market Intelligence**
**Insert after**: RentalIncomeOptimizer

**Concept**: Who actually rents in each Dubai area, and what drives vacancy rates

**Visual Components**:
- **Tenant Profile Cards** (3 cards side-by-side):
  - Card 1: "Young Professionals" (Marina, JBR) — avatar, income range, lease duration, % of market
  - Card 2: "Expat Families" (Arabian Ranches, Dubai Hills) — schools nearby, 2-3yr leases, stability rating
  - Card 3: "Corporate Housing" (Business Bay, DIFC) — short-term, premium rates, volatility
  - Each card has a donut chart showing demographic split
- **Vacancy Heatmap Calendar**:
  - 12-month grid (Jan-Dec)
  - Each month colored by vacancy rate (green=low <3%, amber=moderate 3-6%, red=high >6%)
  - Hover shows: "July 2024: 4.2% vacancy (summer exodus)"
- **Demand Drivers List** (animated checklist):
  - ✓ Metro accessibility (+18% tenant demand)
  - ✓ School proximity (+24% family tenants)
  - ✓ Beach/waterfront (+31% premium achievable)
  - Each item reveals with checkmark draw animation

**Animation**:
- Profile cards flip in from back (3D rotateY, stagger 200ms)
- Vacancy heatmap cells fill left-to-right like a wave
- Demand driver checks draw sequentially

**Narrative**: "In Marina, 68% of tenants are single professionals on 1-year leases—higher turnover, but premium rents. In Arabian Ranches, it's families on 2-3 year contracts—stable, but seasonal. Know your tenant before you buy."

**Why it wows**: No platform shows tenant demographics. This is actionable intel for landlords.

---

### Section 8: **True Cost of Ownership**
**Insert after**: TenantMarketIntelligence

**Concept**: Full 5-year operating cost projection—not just purchase price

**Visual Components**:
- **5-Year Timeline** (horizontal stacked area chart):
  - X-axis: Year 1, 2, 3, 4, 5
  - Stacked layers (bottom to top):
    - Dark red: Service charges
    - Orange: Maintenance & repairs
    - Amber: Property management
    - Light gold: Insurance & utilities
  - Total height = annual cost
  - Hover shows year breakdown
- **Cost Category Cards** (4 mini cards):
  - "Service Charges" — AED 15/sqft × 1,200sqft = AED 18K/yr (with trend arrow ↗ +3.2%/yr)
  - "Chiller Fees" — AED 6K/yr (seasonal spike in summer shown as mini bar chart)
  - "Maintenance Fund" — 2% of value annually (with repair event timeline: "Yr 3: AC replacement")
  - "Property Mgmt" — 6% of rent or self-manage (toggle shows savings)
- **Break-Even Calculator**:
  - "With these costs, you break even in **Year 4.2**"
  - Timeline visualization with gold pin marking break-even point

**Animation**:
- Timeline stacked area draws left-to-right (2s, with smooth easing)
- Cost cards stagger in from bottom (150ms delay each)
- Break-even pin drops onto timeline with bounce

**Narrative**: "Most investors only see the purchase price. We model 5 years of operating costs—because a cheap property with AED 25K annual service charges isn't cheap at all."

**Why it wows**: Total cost of ownership is rarely visualized. This prevents buyer's remorse.

---

## PART C: PERSONAL HOME BUYER SECTIONS (3 sections)
**Theme**: Warm gradient (gold #D4A853 + coral/peach #FF6B6B), softer imagery, lifestyle-centric
**Badge**: "🏡 FOR YOUR FAMILY & HOME" appears at top of first section in this group

### Section 9: **Lifestyle Matcher**
**Insert after**: TrueCostOfOwnership

**Concept**: Match Dubai communities to your family's lifestyle needs

**Visual Components**:
- **Interactive Preference Toggles** (glassmorphic pills, glowing when selected):
  - "School-Age Kids" / "Beachfront" / "Golf Course" / "Metro Access" / "Pet-Friendly" / "Quiet Retreat"
  - Multiple selections allowed
- **Community Cards Grid** (3-4 cards animate in based on selections):
  - Each card: Hero image (family-friendly photo), community name, key stats
  - **Dubai Hills Estate**: "4 international schools within 3km, Dubai Hills Mall, Championship golf, Family parks"
  - **JBR**: "Beach access, 200+ restaurants, Marina Walk, Active nightlife (not ideal for young kids)"
  - **Arabian Ranches**: "Villa community, Polo Club, Desert landscape, Very quiet, 20min to beach"
  - Each card has icon badges (school bus, beach umbrella, golf flag, metro symbol)
- **Amenity Map** (stylized 2D Dubai map):
  - Selected community highlighted with pulsing ring
  - Icons appear for: schools (book), hospitals (cross), malls (shopping bag), beaches (umbrella)
  - Distance labels: "GEMS School — 2.4km"

**Animation**:
- Toggle pills have satisfying spring physics on click
- Community cards shuffle out old results, slide in new matches (crossfade with scale, 0.6s)
- Map icons drop in with stagger (100ms each), bounce on landing

**Narrative**: "You're not buying an investment—you're choosing where your kids go to school, where you grocery shop on Fridays, how long you sit in traffic. We match Dubai's communities to how you actually live."

**Why it wows**: Real estate isn't just ROI for home buyers—it's life quality. Emotional connection matters.

---

### Section 10: **Golden Visa Pathway**
**Insert after**: LifestyleMatcher

**Concept**: Step-by-step guide to securing UAE residency through property purchase

**Visual Components**:
- **Visa Flowchart** (horizontal stepper with 5 steps):
  - Step 1: "Purchase AED 2M+ property" (checkmark badge, "You qualify!")
  - Step 2: "Obtain Title Deed" (document icon, "2-4 weeks")
  - Step 3: "Submit Visa Application" (form icon, "Online via ICP portal")
  - Step 4: "Medical & Biometrics" (clipboard icon, "1 week")
  - Step 5: "10-Year Visa Issued" (passport icon, gold shimmer)
  - Progress line connects all steps, animates left-to-right
- **Benefits Grid** (4 glassmorphic cards):
  - "10-Year Residency" (renewable, no sponsor needed)
  - "Family Inclusion" (spouse + children + 1 domestic helper)
  - "100% Foreign Ownership" (no Emirati partner required)
  - "Tax Efficiency" (0% personal income tax)
- **Qualifying Properties Filter**:
  - Map of Dubai with eligible areas highlighted (gold overlay)
  - Toggle: "Show properties ≥ AED 2M" — filters Deal Rooms dynamically

**Animation**:
- Stepper progress line draws left-to-right (2s)
- Step icons pop in sequentially (300ms stagger) with scale bounce
- Benefit cards flip in from back face (3D rotateY, 150ms stagger)
- Map eligible areas fade in with pulsing gold glow

**Narrative**: "A AED 2 million Dubai property isn't just a home—it's a 10-year residency visa for you and your family. No sponsor, no renewals every 2 years, 100% ownership. This is how thousands of families secure their future in the UAE."

**Why it wows**: Most buyers don't realize the visa benefit. This reframes property as a life-changing decision.

---

### Section 11: **Move-In Cost Planner**
**Insert after**: GoldenVisaPathway

**Concept**: What does it *really* cost to move into a Dubai property?

**Visual Components**:
- **Cost Category Breakdown** (vertical stacked bar chart):
  - Furniture Package: AED 40K - 80K (range slider)
  - DEWA Deposit: AED 2K (fixed)
  - Internet/TV Setup: AED 500/mo (fixed)
  - Chiller Deposit: AED 5K (if applicable)
  - Parking Registration: AED 300 (fixed)
  - Community Access Cards: AED 200/person
  - Total stacks to show full cost (e.g., AED 58K)
- **Furniture Package Visualizer**:
  - Three preset packages (cards):
    - "Essential" — AED 35K (bed, sofa, dining table, basics) — minimalist icon style
    - "Comfort" — AED 60K (above + decor, quality appliances) — cozy imagery
    - "Luxury" — AED 120K (designer furniture, smart home, art) — premium feel
  - Clicking package updates the total cost bar
- **Timeline Checklist** (move-in week 1):
  - Day 1: DEWA activation (click to reveal "Book online 48hrs before move")
  - Day 2: Internet installation (click to reveal "du vs Etisalat comparison")
  - Day 3: Furniture delivery (click to reveal "Popular vendors: IKEA, Home Centre, 2XL")
  - Each item has a checkbox that animates when clicked

**Animation**:
- Cost bar builds from bottom up (stacked layers, 1.5s)
- Package cards slide in from bottom (200ms stagger)
- Clicking package triggers smooth bar height transition (spring physics)
- Checklist items reveal on scroll with fade-slide-up

**Narrative**: "Your AED 2.1M property needs another AED 50-80K to become a home. DEWA deposits, furniture, internet setup—we break it all down so moving to Dubai feels planned, not chaotic."

**Why it wows**: First-time Dubai buyers underestimate move-in costs. This prevents sticker shock and builds trust.

---

## Implementation Checklist

### New Section Files (11 total):
**Institutional (5)**:
- [ ] `components/sections/PortfolioIntelligence.tsx`
- [ ] `components/sections/MarketDepthScanner.tsx`
- [ ] `components/sections/MacroIntelligence.tsx`
- [ ] `components/sections/DeveloperScorecard.tsx`
- [ ] `components/sections/PredictiveYield.tsx`

**Cashflow Seekers (3)**:
- [ ] `components/sections/RentalIncomeOptimizer.tsx`
- [ ] `components/sections/TenantMarketIntelligence.tsx`
- [ ] `components/sections/TrueCostOfOwnership.tsx`

**Personal Buyers (3)**:
- [ ] `components/sections/LifestyleMatcher.tsx`
- [ ] `components/sections/GoldenVisaPathway.tsx`
- [ ] `components/sections/MoveInCostPlanner.tsx`

### New Visualization Components:
**Institutional**:
- [ ] `components/viz/CorrelationMatrix.tsx` - 4x4 heatmap
- [ ] `components/viz/DepthChart.tsx` - Bid/ask orderbook
- [ ] `components/viz/Treemap.tsx` - Liquidity rectangles
- [ ] `components/viz/FlowMap.tsx` - Trade flow arrows
- [ ] `components/viz/ForecastChart.tsx` - Multi-line with confidence bands
- [ ] `components/viz/ScorecardTable.tsx` - Interactive table

**Cashflow Seekers**:
- [ ] `components/viz/CostBreakdownWaterfall.tsx` - Operating costs waterfall
- [ ] `components/viz/CashOnCashGauge.tsx` - Return % gauge
- [ ] `components/viz/TenantProfileCard.tsx` - Demographic cards
- [ ] `components/viz/VacancyHeatmap.tsx` - 12-month calendar grid
- [ ] `components/viz/OwnershipTimeline.tsx` - 5-year stacked area

**Personal Buyers**:
- [ ] `components/viz/CommunityCard.tsx` - Lifestyle match results
- [ ] `components/viz/AmenityMap.tsx` - 2D Dubai map with icons
- [ ] `components/viz/VisaStepper.tsx` - Horizontal progress steps
- [ ] `components/viz/FurniturePackageCard.tsx` - Package selector
- [ ] `components/viz/MoveInChecklist.tsx` - Interactive checklist

### New Shared Components:
- [ ] `components/shared/PersonaBadge.tsx` - Persona identifier (🏦/💰/🏡 + label)
- [ ] `components/shared/ComparisonPills.tsx` - Metric comparison chips
- [ ] `components/shared/TogglePills.tsx` - Multi-select filter pills

### New Mock Data:
**Institutional**:
- [ ] `data/mockCorrelations.ts` - Area correlation coefficients
- [ ] `data/mockOrderBook.ts` - Bid/ask spread data
- [ ] `data/mockMacro.ts` - Oil, FX, trade flows
- [ ] `data/mockDevelopers.ts` - 10 developers with scores
- [ ] `data/mockForecasts.ts` - 36-month predictions

**Cashflow Seekers**:
- [ ] `data/mockRentalCosts.ts` - Service charges, fees per area
- [ ] `data/mockTenantProfiles.ts` - Demographics by area
- [ ] `data/mockVacancyRates.ts` - Monthly vacancy data
- [ ] `data/mockOwnershipCosts.ts` - 5-year operating expenses

**Personal Buyers**:
- [ ] `data/mockCommunities.ts` - Lifestyle attributes, amenities
- [ ] `data/mockAmenities.ts` - Schools, hospitals, malls with locations
- [ ] `data/mockVisaRequirements.ts` - Golden Visa process steps
- [ ] `data/mockMoveInCosts.ts` - DEWA, furniture, setup fees

### Files to Modify:
- [ ] `app/page.tsx` - Insert 11 new sections with persona theme transitions
- [ ] `app/globals.css` - Add persona theme variables (coral/peach for personal buyers)
- [ ] `components/three/GlobeViz.tsx` - Realistic Earth
- [ ] `components/sections/ClosingCTA.tsx` - Fix title wrap
- [ ] `components/shared/SectionWrapper.tsx` - Support persona theme prop

### Assets to Download:
- [ ] `/public/textures/earth-day.jpg` - NASA Earth texture (4K)
- [ ] `/public/textures/earth-normal.jpg` - Normal map

---

## Final Section Order (20 total)

### Universal Sections (4)
1. **Hero** — Cinematic opening
2. **Investor Workspace** — Identity + AI memo (multi-persona)
3. **Signal Layer** — Market pulse (all personas)
4. **Underwriting Tools** — Cashflow modeling (all personas)

### 🏦 INSTITUTIONAL INVESTOR BLOCK (5 sections) — Teal theme
*Badge: "🏦 FOR INSTITUTIONAL INVESTORS" appears here*
5. **Market Depth Scanner** ← NEW — Order book liquidity
6. **Predictive Yield Forecast** ← NEW — ML 36-month projections
7. **Portfolio Intelligence** ← NEW — Correlation matrix
8. **Developer Scorecard** ← NEW — 10-developer comparison
9. **Macro Intelligence** ← NEW — Oil, FX, capital flows

### 💰 CASHFLOW SEEKER BLOCK (3 sections) — Gold theme
*Badge: "💰 FOR CASHFLOW INVESTORS" appears here*
10. **Rental Income Optimizer** ← NEW — True cash-on-cash returns
11. **Tenant Market Intelligence** ← NEW — Who rents, vacancy rates
12. **True Cost of Ownership** ← NEW — 5-year operating expenses

### 🏡 PERSONAL HOME BUYER BLOCK (3 sections) — Warm gradient theme
*Badge: "🏡 FOR YOUR FAMILY & HOME" appears here*
13. **Lifestyle Matcher** ← NEW — Community lifestyle fit
14. **Golden Visa Pathway** ← NEW — Residency through property
15. **Move-In Cost Planner** ← NEW — DEWA, furniture, setup

### Universal Sections Continued (5)
16. **Deal Rooms** — Investment packets (multi-persona)
17. **Segment Positioning** — Globe + geo-personalization
18. **Partner Enablement** — Co-branded portals
19. **Compliance Layer** — Trust + verification
20. **Closing CTA** — Final vision + CTA

---

## Verification

### Quick Fixes:
- [ ] Title in Closing CTA doesn't wrap awkwardly
- [ ] Globe shows realistic Earth with continents, oceans, and atmosphere
- [ ] City markers glow (Dubai, Singapore, London, Frankfurt)
- [ ] Arc lines animate between cities

### Institutional Sections (Teal Theme):
- [ ] Persona badge "🏦 FOR INSTITUTIONAL INVESTORS" displays at section 5
- [ ] Background subtly shifts to teal-tinted dark (#050507 → teal-infused)
- [ ] Correlation matrix animates cell-by-cell
- [ ] Depth chart bars grow from center outward
- [ ] Trade flow arrows animate on world map
- [ ] Developer table rows stagger in from left
- [ ] Forecast lines draw with confidence bands

### Cashflow Seeker Sections (Gold Theme):
- [ ] Persona badge "💰 FOR CASHFLOW INVESTORS" displays at section 10
- [ ] Background shifts to gold-tinted warm (#0A0A12 → gold-infused)
- [ ] Rental income sliders have smooth spring physics
- [ ] Cash-on-cash gauge fills with liquid animation
- [ ] Tenant profile cards flip in with 3D rotation
- [ ] Vacancy heatmap fills like a wave
- [ ] 5-year cost timeline stacks animate left-to-right

### Personal Buyer Sections (Warm Gradient Theme):
- [ ] Persona badge "🏡 FOR YOUR FAMILY & HOME" displays at section 13
- [ ] Background shifts to warm gradient (gold + coral/peach tones)
- [ ] Lifestyle toggle pills have satisfying click interactions
- [ ] Community cards shuffle smoothly when filters change
- [ ] Amenity map icons drop in with bounce
- [ ] Visa stepper progress line draws left-to-right
- [ ] Furniture package cards trigger smooth cost bar transitions
- [ ] Move-in checklist items reveal on scroll

### General:
- [ ] All 20 sections render without errors
- [ ] Persona theme transitions are smooth (not jarring)
- [ ] All sections responsive (1440/1024/768px)
- [ ] Build passes TypeScript check
- [ ] 60fps scroll performance maintained (11 new sections = perf test)
- [ ] Interactive elements (sliders, toggles, cards) work on mobile

---

## Impact

**Before**: Professional demo showcasing 9 features (single audience)
**After**: **Multi-persona investment intelligence platform** that speaks to every Dubai buyer

### What This Achieves:

1. **Institutional Investors** (5 sections):
   - Correlation matrices, order books, macro intelligence, developer scorecards, predictive ML
   - Signal: "We speak portfolio theory and risk modeling—this is Bloomberg for Dubai real estate"
   - Audience: Family offices, private banks, HNWIs building 5-10 property portfolios

2. **Cashflow Seekers** (3 sections):
   - True cost breakdowns, tenant intelligence, 5-year expense modeling
   - Signal: "We don't hide service charges or chiller fees—your 6.5% yield is real, not fantasy"
   - Audience: Individual private investors, expat professionals building rental income streams

3. **Personal Home Buyers** (3 sections):
   - Lifestyle matching, Golden Visa guide, move-in cost planning
   - Signal: "This isn't just property—it's where your kids go to school and how you secure 10-year UAE residency"
   - Audience: Families, expats, visa seekers buying their primary residence in Dubai

### Why Persona Segmentation Matters:

- **No real estate platform does this.** Most sites either focus only on investors OR only on home buyers. We serve all three, in one immersive experience.
- **Visual theming** (teal institutional → gold cashflow → warm personal) makes it instantly clear who each section serves, without feeling fragmented.
- **Mallika becomes the category leader**—not just "premium broker" but "the platform that understands every Dubai buyer's unique decision drivers."

Combined with the realistic Earth globe and fixed title wrapping, this transforms from "good demo" to "I've never seen anything like this in real estate."
