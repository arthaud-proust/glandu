import { describe, expect, test } from "vitest";
import { getGlanduRankId } from "../src/scripts/glandu";

describe("getGlanduRankId", () => {
    test("should return same id for same name", () => {
        const id1 = getGlanduRankId("alice");
        const id2 = getGlanduRankId("alice");
        expect(id1).toBe(id2);
    });

    test("should return same id for same name with different caps", () => {
        const id1 = getGlanduRankId("alice");
        const id2 = getGlanduRankId("Alice");
        expect(id1).toBe(id2);
    });
});
