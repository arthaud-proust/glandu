type GlanduRankId = string;
type GlanduRank = {
    id: GlanduRankId;
    describe: (name: string) => string;
};

const glanduRanks: Array<GlanduRank> = [
    {
        id: "0",
        describe: (name: string) => `${name} n'est pas un glandu`,
    },
    {
        id: "1",
        describe: (name: string) => `${name} est un(e) glandu de niveau 1`,
    },
    {
        id: "2",
        describe: (name: string) => `${name} est un(e) glandu de niveau 2`,
    },
    {
        id: "3",
        describe: (name: string) => `${name} est un(e) glandu de niveau 3`,
    },
    {
        id: "4",
        describe: (name: string) => `${name} est un(e) glandu de niveau 4`,
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
