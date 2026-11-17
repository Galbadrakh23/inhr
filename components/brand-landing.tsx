import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Globe2,
  Mail,
  Phone,
  UsersRound,
} from 'lucide-react'
import { PhotoArchive } from './photo-archive'

// Change this one URL to update every course card and registration button.
const registrationUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfLgsREkM5HdzBfmq1E9ICkezKQPW81NDTT3PDv-WN4sbCTew/viewform?vc=0&c=0&w=1&flr=0&fbclid=IwAR2jvzMDBf-klTGvEvj-SHmrl_QZOypCevI8WS0jMV9ystPjlxbPBFVv890'

const programs = [
  {
    number: '01',
    title: 'HR MASTER CLASS',
    label: 'Магистрын хөтөлбөр',
    description:
      'Улаанбаатар Эрдэм Их сургуультай хамтран хэрэгжүүлдэг Хүний Нөөцийн Удирдлагын магистрын 1.5 жилийн хөтөлбөр. Долоон удаагийн төгсөлтөөр 90 гаруй магистр бэлтгэн гаргасан.',
    image: '/images/brand-picture-1.jpg',
    imageAlt: 'Хүний нөөцийн мэргэжилтнүүд хамтран сургалтад оролцож буй нь',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'OUTDOOR & INDOOR TRAINING',
    label: 'Байгууллагын сургалт',
    description:
      'Байгууллагынхаа хэрэгцээнд нийцсэн сургалт, хэрэгжилтийн үнэлгээ болон хүний нөөцийн бодлого, стратегийн зөвлөгөөг хамтран бүтээцгээе.',
    image: '/images/brand-cover.jpg',
    imageAlt: 'Хүний нөөцийн салбарын мэргэжлийн арга хэмжээний гэрэл зураг',
    icon: UsersRound,
  },
  {
    number: '03',
    title: 'HR COLLEGE 1 & 2',
    label: 'Мэргэжлийн сертификат',
    description:
      'Хүний нөөцийн менежерүүдэд зориулсан ахисан болон гүнзгий шатны сертификаттай сургалт. 2010 оноос хойш 800 гаруй хүн хамрагдсан.',
    image: '/images/brand-picture-2.jpg',
    imageAlt: 'Хүний нөөцийн үйл ажиллагаанд оролцож буй мэргэжилтнүүд',
    icon: BookOpen,
  },
  {
    number: '04',
    title: 'GLOBAL HR',
    label: 'Олон улсын ур чадвар',
    description:
      'Хүний нөөцийн мэргэжилтнүүдийн англи хэл болон мэргэжлийн ур чадварыг олон улсын түвшинд хөгжүүлэх хөтөлбөр.',
    image: '/images/brand-picture-1.jpg',
    imageAlt: 'Сургалт, арга хэмжээнд оролцож буй хүний нөөцийн мэргэжилтнүүд',
    icon: Globe2,
  },
]

const specialists = [
  { name: 'Г. Тэгшбүрэн', role: 'ХНСҮХ-ийн захирал · Сургагч багш · Профессор, доктор', image: '/images/people/Tegshburen.webp' },
  { name: 'М. Дэлгэрцэцэг', role: 'М-Си-Эс Группийн хүний нөөцийн зөвлөх · ХНСҮХ-ийн сургагч багш', image: '/images/people/Delgertsetseg.webp' },
  { name: 'Б. Болормаа', role: 'Хүний нөөцийн зөвлөх · ХНСҮХ-ийн сургагч багш', image: '/images/people/Bolormaa.webp' },
  { name: 'Н. Цогжавхлан', role: 'Компанийн засаглалын шинжилгээний хүрээлэнгийн гүйцэтгэх захирал · ХНСҮХ-ийн сургагч багш', image: '/images/people/tsogjavkhlan.webp' },
  { name: 'Б. Цолмон', role: 'М-Си-Эс Холдингийн хүний нөөцийн газрын захирал · ХНСҮХ-ийн сургагч багш', image: '/images/people/Tsolmon.webp' },
  { name: 'Н. Жавхлан', role: 'Могул Консалтинг Сервисис ХХК-ийн гүйцэтгэх захирал · Докторант', image: '/images/people/Javkhlan.webp' },
]

function RegisterLink({ className }: { className: string }) {
  return (
    <a
      className={className}
      href={registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Бүртгүүлэх
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  )
}

export function BrandLanding() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="ХНСҮХ нүүр хуудас">
          <Image
            src="/images/inhr-logo.jpg"
            alt="Хүний нөөцийн судалгааны үндэсний хүрээлэн"
            width={88}
            height={88}
            priority
          />
          <span className="brand-lockup-copy">
            <strong>ХНСҮХ</strong>
            <small>Хүний нөөцийн судалгааны үндэсний хүрээлэн</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Үндсэн цэс">
          <a href="#training">СУРГАЛТ</a>
          <a href="#research">СУДАЛГАА</a>
          <a href="#consulting">ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ</a>
          <a href="#about">БИДНИЙ ТУХАЙ</a>
          <a href="#specialists">МЭРГЭЖИЛТНҮҮД</a>
          <a href="#contact">Холбоо барих</a>
        </nav>
        <RegisterLink className="button button-primary header-cta" />
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Хүний нөөцийн хөгжлийг хамтдаа</p>
          <h1 id="hero-title">
            Хүний нөөцийн
            <br />
            хөгжилд <em>шинэ</em>
            <br />
            боломж нээе.
          </h1>
          <p className="hero-description">
            Мэргэжлийн мэдлэг, бодит туршлага, хамтын өсөлтийг нэг дороос.
            Хүний нөөцийн салбарын дараагийн алхмаа бидэнтэй хамт эхлүүлээрэй.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#training">
              Сургалтууд үзэх <ArrowRight aria-hidden="true" size={18} />
            </a>
            <RegisterLink className="button button-outline" />
          </div>
          <div className="hero-proof" aria-label="Хүрээлэнгийн туршлага">
            <div><strong>2010</strong><span>оноос</span></div>
            <p>Монголын хүний нөөцийн мэргэжлийн хөгжлийг дэмжин ажиллаж байна.</p>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            className="hero-photo"
            src="/images/archive/2019-01.webp"
            alt="Хүний нөөцийн мэргэжилтнүүдийн арга хэмжээний хамтын зураг"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <div className="hero-photo-shade" />
          <div className="hero-note">
            <span className="hero-note-mark" aria-hidden="true">INHR</span>
            <div>
              <strong>Мэдлэгээс хөгжил рүү</strong>
              <span>Хүний нөөцийн шинэ үе</span>
            </div>
            <ArrowUpRight aria-hidden="true" size={18} />
          </div>
          <span className="hero-index">01 / 04</span>
        </div>
      </section>

      <section className="program-section" id="training" aria-labelledby="program-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Сургалт ба хөтөлбөр</p>
            <h2 id="program-title">Ур чадвараа <em>дараагийн</em> түвшинд.</h2>
          </div>
          <p className="section-intro">
            Таны зорилго, байгууллагын хэрэгцээнд нийцсэн хөгжлийн хөтөлбөрүүд.
          </p>
        </div>

        <div className="program-grid">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <article className="program-card" key={program.number}>
                <a
                  className="program-image-link"
                  href={registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${program.title} хөтөлбөрт бүртгүүлэх`}
                >
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw"
                  />
                  <span className="program-number">{program.number}</span>
                  <span className="program-image-arrow" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </span>
                </a>
                <div className="program-body">
                  <div className="program-label"><Icon aria-hidden="true" size={16} /> {program.label}</div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <a className="text-link" href={registrationUrl} target="_blank" rel="noopener noreferrer">
                    Бүртгүүлэх <ArrowRight aria-hidden="true" size={16} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="about-band" id="about" aria-labelledby="about-title">
        <div className="about-mark" aria-hidden="true">INHR<span>.</span></div>
        <div className="about-copy">
          <p className="eyebrow eyebrow-light"><span /> Бидний тухай</p>
          <h2 id="about-title">Салбарын мэдлэгийг<br /><em>бодит өсөлт</em> болгоно.</h2>
          <p>
            Хүний Нөөцийн Судалгааны Үндэсний Хүрээлэн нь байгууллагуудын хөгжилд
            шаардлагатай хүний нөөцийн мэргэжлийн цогц үйлчилгээ, сургалт, зөвлөгөөгөөр
            хангаж ажилладаг.
          </p>
          <a className="about-link" href="https://inhr.mn" target="_blank" rel="noopener noreferrer">
            Хүрээлэнгийн тухай <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="about-stats">
          <div><strong>90<span>+</span></strong><small>магистрын төгсөгч</small></div>
          <div><strong>800<span>+</span></strong><small>HR College-ийн оролцогч</small></div>
          <div><strong>2010</strong><small>салбартаа ажилласан туршлага</small></div>
        </div>
      </section>

      <section className="vision-mission-section" aria-label="Хүрээлэнгийн алсын хараа, эрхэм зорилго">
        <article className="vision-mission-card vision-card">
          <span className="vision-mission-kicker">БИДНИЙ ЗОРИЛГО</span>
          <h2>Алсын хараа</h2>
          <p>Дэлхийн жишигт дүйцсэн үндэсний хүний нөөцийн менежментийн загварыг хөгжүүлэх</p>
        </article>
        <div className="vision-artwork">
          <Image src="/images/goal.png" alt="Зорилгын оргилд хүрч буй хүний дүрслэл" width={260} height={260} />
        </div>
        <article className="vision-mission-card mission-card">
          <span className="vision-mission-kicker">БИДНИЙ ҮҮРЭГ</span>
          <h2>Эрхэм зорилго</h2>
          <p>Монголын бизнесийн, төрийн болон төрийн бус байгууллагуудын хөгжилд шаардагдаж буй хүний нөөцийн мэргэжлийн цогц үйлчилгээгээр хангах</p>
        </article>
      </section>

      <section className="specialists-section" id="specialists" aria-labelledby="specialists-title">
        <div className="specialists-heading">
          <div>
            <p className="eyebrow"><span /> Туршлага · Мэргэжлийн ур чадвар</p>
            <h2 id="specialists-title">Мэргэжилтнүүдтэйгээ <em>танилцана уу.</em></h2>
          </div>
          <p>Хүний нөөцийн салбарын судалгаа, сургалт, зөвлөх үйлчилгээнд хувь нэмрээ оруулж буй мэргэжилтнүүд.</p>
        </div>
        <div className="specialists-grid">
          {specialists.map((person, index) => (
            <article className={`specialist-card specialist-card-${index % 3}`} key={person.name}>
              <div className="specialist-photo">
                <Image src={person.image} alt={person.name} fill sizes="(max-width: 620px) 50vw, (max-width: 1000px) 33vw, 16vw" />
              </div>
              <div className="specialist-copy"><h3>{person.name}</h3><p>{person.role}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section" aria-label="Судалгаа ба зөвлөх үйлчилгээ">
        <article className="expertise-card expertise-research" id="research">
          <span className="expertise-number">01 / СУДАЛГАА</span>
          <h2>Шийдвэрт чиглэсэн <em>судалгаа.</em></h2>
          <p>Байгууллагын өнөөгийн онцлог, хэрэгцээг тодорхойлж, хүний нөөцийн менежментийн талаарх судалгаа, үнэлгээгээр хөгжлийн бодит хэрэгцээг илрүүлнэ.</p>
          <a className="expertise-link" href="#contact">Судалгааны талаар холбогдох <ArrowRight aria-hidden="true" size={16} /></a>
        </article>
        <article className="expertise-card expertise-consulting" id="consulting">
          <span className="expertise-number">02 / ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ</span>
          <h2>Мэдлэгийг <em>хэрэгжүүлж</em> хөгжүүлье.</h2>
          <p>Хүний нөөцийн бодлого, стратегийн зөвлөгөө болон хэрэгцээнд нийцсэн сургалтыг байгууллагатай хамтран төлөвлөж, хэрэгжилтийг үнэлнэ.</p>
          <a className="expertise-link" href="#contact">Зөвлөгөө авах <ArrowRight aria-hidden="true" size={16} /></a>
        </article>
      </section>

      <PhotoArchive />

      <section className="registration" aria-labelledby="registration-title">
        <div>
          <p className="eyebrow"><span /> Дараагийн алхам</p>
          <h2 id="registration-title">Өсөлтөө өнөөдрөөс<br /><em>эхлүүлээрэй.</em></h2>
        </div>
        <div className="registration-contact">
          <a href="tel:+97677112050" aria-label="7711 2050 руу залгах">
            <Phone aria-hidden="true" size={22} />
            <span><small>УТАС</small><strong>7711 2050</strong></span>
          </a>
          <a href="mailto:info@inhr.mn" aria-label="info@inhr.mn хаяг руу имэйл илгээх">
            <Mail aria-hidden="true" size={22} />
            <span><small>И-МЭЙЛ</small><strong>info@inhr.mn</strong></span>
          </a>
          <a href="https://www.facebook.com/inhrMN" target="_blank" rel="noopener noreferrer" aria-label="INHR Facebook хуудсыг шинэ цонхонд нээх">
            <Globe2 aria-hidden="true" size={22} />
            <span><small>FACEBOOK</small><strong>inhrMN</strong></span>
          </a>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <a className="footer-brand" href="#top">ХНСҮХ <span>·</span> inhr.mn</a>
        <div className="footer-contact">
          <a href="tel:+97677112050">Утас: 7711 2050</a>
          <a href="mailto:info@inhr.mn">info@inhr.mn</a>
          <a href="https://www.facebook.com/inhrMN" target="_blank" rel="noopener noreferrer">Facebook · inhrMN</a>
          <span>BlueMon Center, Улаанбаатар</span>
        </div>
        <a className="footer-top" href="#top">Дээш буцах <ArrowUpRight aria-hidden="true" size={15} /></a>
      </footer>
    </main>
  )
}
