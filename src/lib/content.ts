export const content = {
  home: {
    hero: {
      title: 'Transforming Business Through Strategic Excellence',
      description: 'With over 30 years of experience, CCDM Services delivers cutting-edge solutions in spend management, Lean Six Sigma, and business process optimization.',
    },
    features: [
      {
        title: 'Spend Management',
        description: 'Optimize your spending with data-driven insights and strategic procurement solutions.',
      },
      {
        title: 'Lean Six Sigma',
        description: 'Streamline operations and eliminate waste with proven methodologies.',
      },
      {
        title: 'Process Optimization',
        description: 'Enhance efficiency and productivity through strategic process improvements.',
      },
    ],
  },
};

export async function getPageContent(page: string) {
  return content[page];
}
