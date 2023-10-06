/**
 * @see https://jsonresume.org/schema/
 */
export interface JsonResume {
    basics: Basic
    work: Work[]
    volunteer: Volunteer[]
    education: Education[]
    awards: Award[]
    certificates: Certificate[]
    publications: Publication[]
    skills: Skill[]
    languages: Language[]
    interests: Interest[]
    references: Reference[]
    projects: Project[]
}

interface Basic {
    /** @example John Doe */
    name: string

    /** @example Software Engineer */
    label: string

    /** @example /public/foto.jpeg */
    image: string

    /** A short bio */
    summary: string

    email: string
    phone: string
    url: string
    location: Location
    profiles: Profile[]
}

/** Network profiles */
type Profile = Partial<{
    /** @example Twitter */
    network: string

    /** @example john */
    username: string

    /** @example https://twitter.com/john */
    url: string
}>;

interface Location {
    /** @example 2712 Broadway St */
    address: string

    /** @example CA 94115 */
    postalCode: string

    /** @example San Francisco */
    city: string

    /** @example US */
    region: string

    /** @example California */
    countryCode: string
}

interface Work {
    /** @example Company */
    name: string

    position: string
    url: string
    summary: string
    highlights: string[]

    startDate: string
    endDate: string
}

interface Volunteer {
    organization: string
    position: string
    url: string
    startDate: string
    endDate: string
    summary: string
    highlights: string[]
}

interface Education {
    /** @example University */
    institution: string
    url: string

    /** @example Software Development */
    area: string

    /** @example Bachelor */
    studyType: string
    startDate: string
    endDate: string
    score: string

    /** @example ["DB1101 - Basic SQL"] */
    courses: string[]
}

interface Award {
    title: string
    date: string
    awarder: string
    summary: string
}

interface Certificate {
    /** @example Certificate */
    name: string

    /** @example Company */
    issuer: string

    date: string
    url: string
}

interface Publication {
    name: string
    publisher: string
    releaseDate: string
    url: string
    summary: string
}

interface Skill {
    name: string
    level: string
    keywords: string[]
}

interface Language {
    language: string
    fluency: string
}

interface Interest {
    name: string
    keywords: string[]
}

interface Reference {
    name: string
    reference: string
}

interface Project {
    name: string
    startDate: string
    endDate: string
    description: string
    highlights: string[]
    url: string
}
