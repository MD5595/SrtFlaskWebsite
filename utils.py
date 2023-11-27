def load_flashcards(flashcards_file):
    flashcards = {}
    f = open(flashcards_file, 'r')
    rows = f.readlines()
    for row in rows[1:]:
        vals = row.split(',')
        if vals[0] in flashcards:
            flashcards[vals[0]].append((vals[1],vals[2].strip('\n')))
        else:
            flashcards[vals[0]] = [(vals[1],vals[2].strip('\n'))]

    return flashcards
