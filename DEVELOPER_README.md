# Development Action Plan - EverydayResilience
**Status:** Post-Launch Feedback Review  
**Date:** October 27, 2024  
**Priority:** High

## 📋 Executive Summary
After going live, we've received comprehensive feedback from users covering functionality, content, UX, and legal requirements. This document outlines technical issues, proposed solutions, and implementation scope.

---

## 🔴 Critical Issues (Must Fix)

### 1. **404 Errors on Service Links**
**Issue:** Service links on homepage lead to 404 pages  
**Impact:** High bounce rates, loss of user trust  
**Technical Fix:**
- Create individual landing pages for each service type
- Update routing in `components/sections/services.tsx`
- Add service detail pages: `/services/general`, `/services/family`, `/services/anxiety`, `/services/depression`

**Files to Modify:**
- `components/sections/services.tsx` - Update links
- `content/services.ts` - Expand service data structure
- Create new files: `app/services/[service]/page.tsx`

### 2. **Newsletter Unsubscribe Link Missing**
**Issue:** Email promises unsubscribe link but doesn't provide it  
**Impact:** Legal compliance, user trust, potential CAN-SPAM violation  
**Technical Fix:**
- Update email template in `lib/email/templates.ts`
- Add unique unsubscribe link/token system
- Implement unsubscribe handling endpoint

**Files to Modify:**
- `lib/email/templates.ts`
- `lib/email/newsletter.ts`
- Create: `app/api/newsletter/unsubscribe/route.ts`

### 3. **Google Maps Location Shifting**
**Issue:** Location pin not stable/accurate  
**Impact:** User confusion, credibility issues  
**Technical Fix:**
- Verify exact coordinates in `components/layout/footer.tsx`
- Hardcode correct Kakamega location
- Test with Google Maps API

**Files to Modify:**
- `components/layout/footer.tsx`

### 4. **Testimonials Carousel Not Functional**
**Issue:** Arrows only change color, don't navigate stories  
**Impact:** Poor UX, expected functionality missing  
**Technical Fix:**
- Review carousel implementation in `components/sections/testimonials.tsx`
- Ensure proper state management and navigation logic
- Add active indicators

**Files to Modify:**
- `components/sections/testimonials.tsx`

### 5. **Missing Financial Integration**
**Issue:** Bank details and M-Pesa not set up  
**Impact:** Revenue loss, user frustration  
**Technical Fix:**
- Integrate payment gateway (Stripe/Paystack for Kenya)
- Add M-Pesa integration
- Create payment tracking system
- Add donation tracking

**Files to Create:**
- `app/api/payments/route.ts`
- `components/sections/donation.tsx` (if needed)
- Payment configuration in env variables

---

## 🟡 Important Enhancements

### 6. **Service Detail Pages Enhancement**
**Requirements:**
- Add "What to Expect" sections
- Include FAQ per service type
- Add cost breakdowns
- Progress tracking info
- Clear confidentiality policy

**Technical Approach:**
- Extend `content/services.ts` with expanded data structure
- Create template components: `components/sections/service-details.tsx`
- Add FAQ component with accordion
- Link to subsidy application process

### 7. **Visual Content**
**Issue:** Images don't reflect Kenyan clientele  
**Requirement:** Client needs to provide authentic imagery  
**Technical Changes:**
- Replace placeholder images in `public/` directory
- Update image references in service pages
- Ensure responsive image optimization

### 8. **Mobile Responsiveness Audit**
**Issue:** Unspecified mobile issues  
**Actions:**
- Run Lighthouse audit
- Test on multiple devices
- Optimize images and loading times
- Check touch interactions

### 9. **Legal Pages - Terms & Conditions**
**Issue:** Missing Terms of Use page  
**Technical Fix:**
- Create `app/(legal)/terms/page.tsx`
- Add required disclaimers:
  - Emergency care policy
  - Informational use only
  - Session recording policy
  - Confidentiality limits
  - Cancellation/refund/billing terms
- Update footer links

### 10. **Social Media Consistency**
**Issue:** Inconsistent links across platforms  
**Client Action Required:** Update Facebook, Instagram, LinkedIn bios

---

## 🟢 Nice-to-Have Features

### 11. **Blog/Articles Section**
**Requirement:** Monthly mental health articles  
**Technical Approach:**
- Create blog structure: `app/blog/page.tsx`
- Add CMS or markdown support
- RSS feed generation
- SEO optimization for articles

**Files to Create:**
- `app/blog/[slug]/page.tsx`
- `components/blog/article-card.tsx`
- Blog content directory

### 12. **Lead Magnet (Downloadable Toolkit)**
**Requirement:** Free PDF in exchange for email  
**Technical Fix:**
- Create PDF templates
- Add download tracking
- Email automation setup
- Implement in newsletter form

### 13. **Subsidy Application System**
**Requirements:**
- Clear eligibility criteria
- Application form
- Availability tracking
- Deadline management

**Technical Implementation:**
- Create `app/subsidy/page.tsx`
- Form handling in `app/api/subsidy/route.ts`
- Admin dashboard to review applications

### 14. **AI Chatbot Integration**
**Requirement:** Automated responses for first-time users  
**Technical Considerations:**
- Integrate with OpenAI or similar
- Set up conversation flows
- WhatsApp Business API integration
- Fallback to human escalation

**Cost Considerations:** 
- API usage fees apply
- May need subscription service

### 15. **Analytics & Tracking**
**Requirement:** Monitor user behavior  
**Technical Fix:**
- Already have Google Analytics integrated
- Set up custom events
- Create dashboard or integrate with existing
- Track conversion funnel

---

## 📊 Technical Architecture Changes

### Database Requirements (If Needed)
- User sessions tracking
- Newsletter subscribers
- Payment transactions
- Subsidy applications
- Blog articles
- Analytics events

**Options:**
1. Continue with current stack (no database)
2. Add Prisma + PostgreSQL
3. Use Supabase (PostgreSQL with built-in features)
4. Hybrid approach (Stripe for payments, Supabase for data)

### Environment Variables Needed
```env
# Payments
PAYMENT_PROVIDER=
MPESA_CONSUMER_KEY=
MPESA_CONSUMER_SECRET=
STRIPE_SECRET_KEY=

# AI Chatbot (if implemented)
OPENAI_API_KEY=

# Email unsubscribe
UNSUBSCRIBE_SECRET=
BASE_URL=

# Database (if implemented)
DATABASE_URL=
```

---

## 🎯 Implementation Phases

### Phase 1: Critical Fixes (Week 1)
1. Fix 404 service links
2. Add unsubscribe link to emails
3. Fix Google Maps location
4. Fix testimonials carousel
5. Create Terms & Conditions page

### Phase 2: High Priority (Weeks 2-3)
1. Service detail pages with FAQs
2. Payment integration setup
3. Subsidy application system
4. Mobile responsiveness audit
5. Replace images with client-provided content

### Phase 3: Enhancement (Week 4+)
1. Blog/Articles section
2. Lead magnet PDF
3. Advanced analytics
4. AI chatbot (if approved)

---

## 💰 Cost Estimates

### Immediate Costs (Required)
- **Payment Gateway Setup:** $0-50/month
- **Domain/SSL:** $0 (covered)
- **Email Service:** $0 (covered)
- **Image Optimization Tools:** $0-20/month

### Optional Costs
- **AI Chatbot:** $20-100/month (API usage)
- **WhatsApp Business API:** $50-200/month
- **Database (if implemented):** $10-25/month
- **Additional Features:** TBD based on client needs

### Development Time Estimates
- **Phase 1 Critical Fixes:** 8-12 hours
- **Phase 2 Enhancements:** 20-30 hours
- **Phase 3 Future Features:** 30-50 hours

---

## 🔧 Services & Tools to Leverage

### Recommended Services
1. **Payment:** Stripe (global), Paystack (African focus), M-Pesa Direct API
2. **Database:** Supabase (if needed), PostgreSQL
3. **Analytics:** Google Analytics (already integrated)
4. **AI Chat:** ChatGPT API, OpenAI
5. **Email:** Resend or SendGrid (unsubscribe handling)
6. **File Hosting:** AWS S3 or Cloudflare R2 (for PDFs)

### Tools
- **Testing:** Google PageSpeed Insights
- **Bug Tracking:** GitHub Issues
- **Project Management:** GitHub Projects or Linear

---

## 📝 Client Deliverables Required

### Immediate (Week 1)
- [ ] High-quality images for Kenyan clientele (10-15 images)
- [ ] Service pricing breakdowns
- [ ] Company policies (cancellation, refund, confidentiality)
- [ ] Bank account details for integration
- [ ] M-Pesa Paybill number and instructions

### Soon (Weeks 2-3)
- [ ] Blog articles (3-5 articles to start)
- [ ] Downloadable toolkit PDF content
- [ ] Subsidy program details and eligibility
- [ ] FAQs for each service type
- [ ] Updated social media bios

### Future
- [ ] Regular blog content (1/month)
- [ ] Client success stories (anonymized)
- [ ] Video testimonials (optional)

---

## 🚀 Next Steps

1. **Review this document with client**
2. **Prioritize phase 1 tasks**
3. **Obtain required content (images, policies, etc.)**
4. **Set up payment provider accounts**
5. **Begin implementation of critical fixes**
6. **Test and deploy incrementally**

---

## 📞 Support & Questions

For technical questions, contact the development team.  
For content/policy questions, contact the client.

**Updated:** October 27, 2024
