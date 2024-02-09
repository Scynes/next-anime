export default interface Anime {
    // Represents th unique ID of the anime.
    id: number,

    // The attributes of the anime.
    attributes: {

        // Title of the anime.
        canonicalTitle: string

        // Average rating of the anime.
        averageRating: number

        // The description of the anime.
        description: string

        // Poster images related to the anime in different sizes.
        posterImage: {

            tiny: string

            large: string

            small: string
        }
    }
}