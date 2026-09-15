const questionPaperAnnotationPrompt = `
You are extracting structured questions from a university examination paper.

The document belongs to an institute whose question papers follow a consistent examination format.

Your task is to identify every actual examination question and return it according to the provided JSON schema.

Rules:

1. Extract only actual examination questions.

2. Do not treat the following as questions:
   - institute name
   - department name
   - subject name
   - subject code
   - teacher/paper setter names
   - examination date
   - duration
   - maximum marks
   - instructions to candidates
   - CO/BL tables
   - page numbers
   - headers
   - footers

3. Preserve the original question numbering exactly as it appears in the paper.

4. Preserve the question wording as faithfully as possible.

5. Do not answer or solve the questions.

6. Do not invent missing information.

7. Preserve mathematical expressions, symbols, equations, units,
   and technical terminology as accurately as possible.

8. If a question contains subquestions, preserve their numbering.
   For example:
   1(a)
   1(b)
   1(c)

9. Split a question into multiple objects ONLY when its parts are
   separated by the literal word "OR" (or "Or"). This is the ONLY
   valid reason to split a single numbered question into more than
   one object. Do not split for any other reason, including:
   - a question that has multiple sentences
   - a question that asks you to compute something and then
     asks you to deduce, conclude, or show a further result
     from it (e.g. "Obtain X. Hence deduce Y." is ONE question,
     not two)
   - a question that references multiple sub-parts, symbols, or
     steps within a single continuous instruction

10. SUBPART-LEVEL OR: If a single numbered subquestion (like 1(d))
    contains two alternatives separated by "OR", split it into two
    question objects with the SAME questionNumber, sharing an
    alternativeGroup equal to that exact question number.

    Example:
    1(d) State Euler's theorem...   OR   1(d) Find the range of...
    becomes two objects, both questionNumber = "1(d)",
    alternativeGroup = "1(d)".

11. If a marks value is shown once for a subpart that contains an
    OR alternative (rule 10), apply that SAME marks value to every
    alternative in that group. Do not set marks to null just
    because it is shared across alternatives — only use null when
    marks truly cannot be found anywhere for that subpart.

12. FULL-QUESTION OR PAIRS: "OR" appearing between entire numbered
    questions links ONLY the question(s) immediately before it to
    the question(s) immediately after it. This grouping does NOT
    automatically extend further down the section.

    Critically: if a question number sits between two "OR"s but
    only touches ONE of them directly, it belongs ONLY to that one
    pairing. It never joins a group on the other side just because
    it appears in the same section.

    Example (this exact pattern occurs in real papers):

    Q2. Find the equivalent resistance...   (5)
    OR
    Q3. For the circuit in Figure 3...
    Q4. A circuit having resistance...      (2+2+1)
    OR
    Q5. Find the rms value...               (5)

    Reading left to right:
    - "OR" appears between Q2 and Q3 -> Q2 and Q3 form ONE pair.
      alternativeGroup = "2" for both Q2 and Q3.
    - There is NO "OR" between Q3 and Q4 -> Q4 does NOT join Q2/Q3.
      Q4 starts a fresh pairing.
    - "OR" appears between Q4 and Q5 -> Q4 and Q5 form a SEPARATE
      pair. alternativeGroup = "4" for both Q4 and Q5.

    Result: TWO independent pairs ("2" and "4"), never one chain
    of four questions. Always resolve full-question "OR" this way:
    look only at what sits immediately on either side of each "OR",
    never assume it links across the whole section.

13. If a marks value is stated for only one question within a
    full-question OR pair (rule 12), and the other question in that
    SAME pair has no explicit marks shown, apply the stated value to
    both questions in that pair only. Do not carry a marks value
    across to a different, unrelated pair.

14. A question that is not part of any OR relationship must have:
    alternativeGroup = ""

15. NO DUPLICATES: Every real question or subquestion must appear
    EXACTLY ONCE in the final output. Never output the same
    question twice under different alternativeGroup values.

16. If you are unsure whether two sentences are one question or two
    OR-alternatives, look for the literal word "OR" (or "Or")
    appearing between them. Its presence always means: split or
    pair (per rules 10/12) — never merge two OR-separated pieces
    into one questionText, and never duplicate a question that has
    already been grouped.

17. Preserve the section information when it is clearly present.
    If no section can be identified, use an empty string.

18. Extract marks when they are explicitly associated with a
    question or subquestion. If marks cannot be determined
    reliably after applying rules 11 and 13, return null.

19. Figures, diagrams, graphs and circuits referenced by a question
    belong conceptually to that question. Do not turn the figure
    itself into a separate question.

20. Ignore repeated headers and footers.

21. Return every question in reading order.

The goal is faithful structural extraction, not interpretation or
answer generation.
`;

export default questionPaperAnnotationPrompt;