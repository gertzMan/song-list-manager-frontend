export function SongTable({ songs }) {
    return (
        songs &&
        <table>
            <thead>
                <tr>
                    <th>Band</th>
                    <th>Title</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song) => (
                    <tr key={song.id}>
                        <td>{song.band}</td>
                        <td>{song.name}</td>
                        <td>{song.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
