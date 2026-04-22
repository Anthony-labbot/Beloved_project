import { StyleSheet, Text, View } from 'react-native';

import { XendColors } from '@/constants/xend-theme';

export function XendLogo({ compact }: { compact?: boolean }) {
  return (
    <View style={styles.row}>
      <View style={styles.bars}>
        <View style={[styles.bar, { height: compact ? 14 : 18, backgroundColor: XendColors.orange }]} />
        <View style={[styles.bar, { height: compact ? 22 : 28, backgroundColor: '#8B5CF6' }]} />
        <View style={[styles.bar, { height: compact ? 18 : 22, backgroundColor: XendColors.primaryBlue }]} />
      </View>
      <Text style={[styles.wordmark, compact && styles.wordmarkCompact]}>XEND Finance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  bars: { flexDirection: 'row', alignItems: 'flex-end', gap: 3 },
  bar: { width: 5, borderRadius: 2 },
  wordmark: {
    color: XendColors.text,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  wordmarkCompact: { fontSize: 17 },
});
