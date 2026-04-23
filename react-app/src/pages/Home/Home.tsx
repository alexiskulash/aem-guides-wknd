import { useEffect, useState } from 'react'

// Lazy imports - components will be added as they're built
import { lazy, Suspense } from 'react'

const Navigation = lazy(() => import('../../components/Navigation/Navigation'))
const Button = lazy(() => import('../../components/Button/Button'))
const Title = lazy(() => import('../../components/Title/Title'))
const Text = lazy(() => import('../../components/Text/Text'))
const Teaser = lazy(() => import('../../components/Teaser/Teaser'))
const Accordion = lazy(() => import('../../components/Accordion/Accordion'))
const Tabs = lazy(() => import('../../components/Tabs/Tabs'))
const Carousel = lazy(() => import('../../components/Carousel/Carousel'))
const Breadcrumb = lazy(() => import('../../components/Breadcrumb/Breadcrumb'))
const Byline = lazy(() => import('../../components/Byline/Byline'))
const List = lazy(() => import('../../components/List/List'))
const ImageList = lazy(() => import('../../components/ImageList/ImageList'))
const Separator = lazy(() => import('../../components/Separator/Separator'))
const Search = lazy(() => import('../../components/Search/Search'))
const Sharing = lazy(() => import('../../components/Sharing/Sharing'))
const Download = lazy(() => import('../../components/Download/Download'))

const navItems = [
  { id: '1', title: 'Adventures', url: '/adventures', level: 1, active: false, children: [
    { id: '1-1', title: 'Skiing', url: '/adventures/skiing', level: 2, active: false, children: [] },
    { id: '1-2', title: 'Surfing', url: '/adventures/surfing', level: 2, active: false, children: [] },
    { id: '1-3', title: 'Rock Climbing', url: '/adventures/rock-climbing', level: 2, active: false, children: [] },
  ]},
  { id: '2', title: 'Magazine', url: '/magazine', level: 1, active: false, children: [] },
  { id: '3', title: 'Community', url: '/community', level: 1, active: true, children: [] },
]

const accordionItems = [
  { id: 'a1', title: 'What gear do I need?', content: 'For most adventures, you will need appropriate clothing, footwear, and safety equipment. Our guides provide a complete packing list when you book.', expanded: false },
  { id: 'a2', title: 'Are tours suitable for beginners?', content: 'Yes! We offer adventures for all skill levels. Each adventure listing clearly indicates the difficulty level and any prerequisites.', expanded: false },
  { id: 'a3', title: 'What is the cancellation policy?', content: 'You can cancel up to 7 days before your adventure for a full refund. Cancellations within 7 days are subject to a 50% fee.', expanded: false },
]

const tabItems = [
  { id: 't1', label: 'Overview', content: <p>WKND offers immersive outdoor adventures across the globe. From mountain peaks to ocean depths, we create unforgettable experiences for adventurers of all levels.</p> },
  { id: 't2', label: 'Adventures', content: <p>Browse our catalog of over 50 curated adventures spanning 6 continents. Each adventure is led by certified local guides with deep knowledge of the terrain.</p> },
  { id: 't3', label: 'Community', content: <p>Join thousands of fellow adventurers in our community. Share stories, tips, and connect with people who share your passion for the outdoors.</p> },
]

const carouselItems = [
  { id: 'c1', content: <div style={{ background: '#202020', color: '#fff', padding: '4rem 2rem', textAlign: 'center' as const }}><h2>Bali Surf Camp</h2><p>Ride the waves of the Indian Ocean</p></div> },
  { id: 'c2', content: <div style={{ background: '#0045FF', color: '#fff', padding: '4rem 2rem', textAlign: 'center' as const }}><h2>Yosemite Rock Climbing</h2><p>Scale the granite walls of El Capitan</p></div> },
  { id: 'c3', content: <div style={{ background: '#FF0058', color: '#fff', padding: '4rem 2rem', textAlign: 'center' as const }}><h2>Whistler Skiing</h2><p>Powder runs through the Canadian Rockies</p></div> },
]

const breadcrumbItems = [
  { title: 'Home', url: '/', active: false },
  { title: 'Adventures', url: '/adventures', active: false },
  { title: 'Bali Surf Camp', url: '/adventures/bali', active: true },
]

const listItems = [
  { title: 'Bali Surf Camp', url: '/adventures/bali', date: 'March 2025' },
  { title: 'Yosemite Rock Climbing', url: '/adventures/yosemite', date: 'April 2025' },
  { title: 'Whistler Skiing', url: '/adventures/whistler', date: 'December 2025' },
  { title: 'Patagonia Hiking', url: '/adventures/patagonia', date: 'January 2026' },
]

const imageListItems = [
  { id: 'il1', imageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop', title: 'Whistler Skiing', description: 'British Columbia, Canada', url: '/adventures/whistler' },
  { id: 'il2', imageSrc: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=200&fit=crop', title: 'Bali Surf Camp', description: 'Kuta Beach, Indonesia', url: '/adventures/bali' },
  { id: 'il3', imageSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=200&fit=crop', title: 'Yosemite Climbing', description: 'California, United States', url: '/adventures/yosemite' },
  { id: 'il4', imageSrc: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop', title: 'Patagonia Hiking', description: 'Torres del Paine, Chile', url: '/adventures/patagonia' },
]

const sharingPlatforms = [
  { name: 'facebook', url: 'https://facebook.com/sharer?u=' + encodeURIComponent('https://wknd.site') },
  { name: 'twitter', url: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://wknd.site') },
  { name: 'instagram', url: 'https://instagram.com' },
]

const downloadItem = {
  url: '/downloads/wknd-adventure-guide.pdf',
  title: 'WKND Adventure Guide 2025',
  description: 'Complete guide to all adventures',
  size: '4.2 MB',
  format: 'PDF',
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`root${scrolled ? ' scrolly' : ''}`}>
      <Suspense fallback={null}>
        {/* Header */}
        <header className="experiencefragment cmp-experiencefragment--header">
          <div className="cmp-layoutcontainer--header">
            <div className="aem-Grid">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="/" className="cmp-image--logo" style={{ fontWeight: 700, fontSize: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
                  WKND
                </a>
                <Navigation items={navItems} logoUrl="/" logoText="WKND" />
                <Search onSearch={(q) => console.log('search:', q)} />
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main>
          {/* Breadcrumb */}
          <div style={{ padding: '0 14px', maxWidth: 1164, margin: '0 auto' }}>
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Teaser */}
          <Teaser
            variant="hero"
            imageSrc="https://images.unsplash.com/photo-1469521669194-babb45599def?w=1400&h=600&fit=crop"
            imageAlt="WKND Adventures"
            pretitle="2025 Season"
            title="Explore the World with WKND"
            titleLink="/adventures"
            description="<p>Immersive outdoor adventures for every skill level. From surfing in Bali to skiing in Whistler.</p>"
            actions={[
              { label: 'Browse Adventures', link: '/adventures' },
              { label: 'Learn More', link: '/about' },
            ]}
          />

          {/* Content section */}
          <div style={{ maxWidth: 1164, margin: '2rem auto', padding: '0 14px' }}>
            <Title text="Featured Adventures" type="h2" />
            <Text content="<p>Discover our curated selection of outdoor adventures from around the world. Each experience is crafted to challenge, inspire, and transform.</p>" />
            <Separator />

            {/* Image List */}
            <ImageList items={imageListItems} />

            <Separator />

            {/* Tabs */}
            <Tabs items={tabItems} />

            <Separator />

            {/* Accordion */}
            <Title text="Frequently Asked Questions" type="h3" />
            <Accordion items={accordionItems} />

            <Separator />

            {/* Carousel */}
            <Title text="Upcoming Adventures" type="h3" />
            <Carousel items={carouselItems} autoplay={false} />

            <Separator />

            {/* Byline */}
            <Title text="Meet Your Guide" type="h3" />
            <Byline
              name="Sarah Anderson"
              occupations={['Mountain Guide', 'Certified Instructor', 'Adventure Photographer']}
              imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop"
            />

            <Separator />

            {/* List */}
            <Title text="Latest Adventures" type="h3" />
            <List items={listItems} />

            <Separator />

            {/* Buttons */}
            <Title text="Actions" type="h3" />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button label="Book Now" link="/book" />
              <Button label="Learn More" link="/about" variant="secondary" />
            </div>

            <Separator />

            {/* Download */}
            <Title text="Downloads" type="h3" />
            <Download {...downloadItem} />

            <Separator />

            {/* Sharing */}
            <Title text="Share" type="h3" />
            <Sharing platforms={sharingPlatforms} />
          </div>
        </main>

        {/* Footer */}
        <footer className="experiencefragment cmp-experiencefragment--footer">
          <div style={{ maxWidth: 1164, margin: '0 auto', padding: '2rem 14px', color: '#EBEBEB' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <strong style={{ fontSize: '1.5rem' }}>WKND</strong>
                <p style={{ marginTop: '0.5rem', fontSize: 14 }}>Adventures for the bold.</p>
              </div>
              <div>
                <Title text="Quick Links" type="h6" />
                <List items={[
                  { title: 'Adventures', url: '/adventures' },
                  { title: 'Magazine', url: '/magazine' },
                  { title: 'Community', url: '/community' },
                  { title: 'Contact', url: '/contact' },
                ]} />
              </div>
              <div>
                <Title text="Connect" type="h6" />
                <Sharing platforms={sharingPlatforms} />
              </div>
            </div>
            <Separator />
            <p style={{ fontSize: 12, color: '#696969', textAlign: 'center' }}>
              © 2025 WKND Adventures. All rights reserved.
            </p>
          </div>
        </footer>
      </Suspense>
    </div>
  )
}
