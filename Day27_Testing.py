def minimum_index(seq):
    if len(seq) == 0:
        raise ValueError("Cannot get the minimum value index from an empty sequence")

    min_idx = 0
    for i in range(1, len(seq)):
        if seq[i] < seq[min_idx]:
            min_idx = i

    return min_idx


class TestDataEmptyArray(object):
    @staticmethod
    def get_array():
        return []


class TestDataUniqueValues(object):
    @staticmethod
    def get_array():
        return [5, 3, 2]

    @staticmethod
    def get_expected_result():
        return 2


class TestDataExactlyTwoDifferentMinimums(object):
    @staticmethod
    def get_array():
        return [5, 3, 2, 2, 9]

    @staticmethod
    def get_expected_result():
        return 2


def TestWithEmptyArray():
    try:
        seq = TestDataEmptyArray.get_array()
        minimum_index(seq)
    except ValueError:
        pass
    else:
        assert False


def TestWithUniqueValues():
    seq = TestDataUniqueValues.get_array()

    assert len(seq) >= 2
    assert len(list(set(seq))) == len(seq)

    expected_result = TestDataUniqueValues.get_expected_result()
    result = minimum_index(seq)

    assert result == expected_result


def TestWithExactyTwoDifferentMinimums():
    seq = TestDataExactlyTwoDifferentMinimums.get_array()

    assert len(seq) >= 2

    tmp = sorted(seq)

    assert tmp[0] == tmp[1] and (len(tmp) == 2 or tmp[1] < tmp[2])

    expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result()
    result = minimum_index(seq)

    assert result == expected_result


TestWithEmptyArray()
TestWithUniqueValues()
TestWithExactyTwoDifferentMinimums()
print("OK")
