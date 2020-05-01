const QUERY = `
query ($page: Int, $perPage: Int, $seasonYear: Int, $season: MediaSeason, $format: MediaFormat, $excludeFormat: MediaFormat, $status : MediaStatus, $episodesGreater: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media (season : $season, seasonYear: $seasonYear, isAdult: false, type: ANIME, format: $format, episodes_greater: $episodesGreater, format_not: $excludeFormat, status: $status, search: $search) {
            id
            format
            source
            popularity
            title {
                romaji
                english
            }
            coverImage {
                large
            }
            bannerImage
            description
            genres
            nextAiringEpisode{
                airingAt
            }
            episodes
            startDate{
                year
                month
                day
            }
            endDate{
                year
                month
                day
            }
            airingSchedule( notYetAired: true perPage: 2) {
                nodes {
                    episode airingAt
                }
            }
            averageScore
            trailer{
                id
                thumbnail
                site
            }
            hashtag
            externalLinks{
                url
                site
            }
            studios(isMain: true) {
                nodes {
                    id name siteUrl
                }
            }
            rankings {
                rank type season allTime
            }
            status
        }
    }
    
}
`;

export default QUERY;
