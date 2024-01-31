type GlanduRankId = string;
type GlanduRank = {
    id: GlanduRankId;
    title: string;
};

const glanduRanks: Array<GlanduRank> = [
    {
        id: "0",
        title: "Faux Glandu",
    },
    {
        id: "1",
        title: "Glandu basique",
    },
    {
        id: "2",
        title: "Glandu vicieux",
    },
    {
        id: "3",
        title: "Glandu basse-performance",
    },
    {
        id: "4",
        title: "Glandu invertébré",
    },
];

const simpleHash = (str: string, radix: number = 32) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= hash;
    }

    return new Uint32Array([hash])[0].toString(radix);
};

export const getGlanduRankId = (name: string): GlanduRankId => {
    const lowerCaseName = name.toLowerCase();
    const nameHash = simpleHash(lowerCaseName, glanduRanks.length);

    const id = nameHash[nameHash.length - 1];
    console.log(id);

    return id.toString();
};

export const getGlanduRankForName = (name: string): GlanduRank => {
    const glanduRankId = getGlanduRankId(name);

    const glanduRank = glanduRanks.find(
        (glanduRank) => glanduRank.id === glanduRankId
    );

    if (!glanduRank) {
        throw new Error(`unknown rank id: ${glanduRankId}`);
    }

    return glanduRank;
};
